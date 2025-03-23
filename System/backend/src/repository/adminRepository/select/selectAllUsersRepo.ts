import db from "../../../config/db";

export class UserService {
  
    // Fetch all users (as you already have)
    static async getAllUsers() {
        return db('gen_users')
            .leftJoin('status', 'gen_users.status_id', 'status.id')
            .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
            .leftJoin('persons', 'gen_users.person_id', 'persons.id')
            .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
            .where('user_roles.is_active', '=', 1)
            .select(
                'gen_users.id as user_id',
                'gen_users.username',
                'gen_users.password',
                'persons.first_name',
                'persons.middle_name',
                'persons.last_name',
                'persons.email',
                'user_roles.role_name',
                'status.status_name',
                'gen_users.created_at',
                'gen_users.is_deleted_by',
                'status.status_name'
            );
    }

    // Create a new user
    static async createUser(userData: any) {
        const { username, password, person_id, user_role_id, status_id } = userData;

        // Insert into gen_users table
        const newUser = await db('gen_users').insert({
            username,
            password,
            person_id,
            user_role_id,
            status_id,
            created_at: new Date()
        }).returning('*'); // This assumes you're using PostgreSQL for the returning method

        return newUser;
    }

    // Update an existing user
    static async updateUser(userId: number, userData: any) {
        const { username, password, person_id, user_role_id, status_id } = userData;

        // Update the user data
        const updatedUser = await db('gen_users')
            .where('id', '=', userId)
            .update({
                username,
                password,
                person_id,
                user_role_id,
                status_id,
                updated_at: new Date() // Add updated timestamp if necessary
            })
            .returning('*'); // This assumes you're using PostgreSQL

        return updatedUser;
    }

    // Delete a user (soft delete by setting is_deleted)
    static async deleteUser(userId: number, deletedBy: number) {
        // Soft delete the user by setting `is_deleted` and `is_deleted_by`
        const deletedUser = await db('gen_users')
            .where('id', '=', userId)
            .update({
                is_deleted: true,
                is_deleted_by: deletedBy,
                deleted_at: new Date() // Add deleted timestamp if necessary
            })
            .returning('*'); // This assumes you're using PostgreSQL

        return deletedUser;
    }
}
