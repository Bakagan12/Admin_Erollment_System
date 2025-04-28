import  db from '../../config/db';
import { AnnouncementModel } from '../../models/announcement';

export class AnnouncementRepo{
    static async getAllAnnouncements(){
        return await db('announcements').select('*').where('is_deleted', 0).where('status_id', 1);
    }

    static async getAnnouncementById(id: number){
        return await db('announcements').where('id', id).select('*').first();
    }

    static async createAnnouncement(role_id: number, description: string, title: string) {
        const trx = await db.transaction();
    
        try {
            // Insert into announcements table and get the inserted ID
            const [announcementId] = await trx('announcements')
                .insert({
                    title: title,
                    description: description,
                    send_to_role_id: role_id,
                    is_deleted: 0,
                    status_id:1
                });
            
            // Fetch all gen_user IDs with the specified role
            const genUserIds = await trx('gen_users')
                        .leftJoin('gen_user_roles', 'gen_user_roles.gen_user_id', 'gen_users.id')
                        .where('gen_user_roles.user_role_id', role_id)
                        .pluck('gen_users.id');

            if (genUserIds.length === 0) {
                await trx.rollback();
                return { success: false, message: 'There are no users with that role!' };
            }
            // Prepare entries for gen_users_announcement
            const genUserAnnouncements = genUserIds.map(userId => ({
                gen_user_id: userId,
                announcement_id: announcementId,
                is_read: 0,
                user_role_id: role_id,
                created_at: new Date(),
                updated_at: new Date()
            }));
    
            // Insert into gen_users_announcement
            await trx('gen_user_announcement').insert(genUserAnnouncements);

            await trx.commit();
    
            return { success: true, announcementId };
        } catch (error) {
            await trx.rollback();
            throw error;
        }
    }
    
    

    static async updateAnnouncement(announcement: AnnouncementModel){
        return await db('announcements').where('id', announcement.id).update(announcement);
    }

    static async deleteAnnouncement(id: number){
        return await db('announcements').where('id', id).update({is_deleted: 1});
    }

}