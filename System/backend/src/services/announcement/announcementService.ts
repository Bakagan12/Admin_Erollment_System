import { AnnouncementRepo } from "../../repository/announcement/announcementRepo";
import { AnnouncementModel } from "../../models/announcement";

export const getAllAnnouncements = async (): Promise<any[]> => {
    try {
        const announcements = await AnnouncementRepo.getAllAnnouncements();
        return announcements;
    } catch (err) {
        throw new Error('Error fetching announcements: ' + (err as Error).message);
    }
};

export const getAnnouncementById = async (id: number): Promise<any> => {
    try {
        const announcement = await AnnouncementRepo.getAnnouncementById(id);
        return announcement;
    } catch (err) {
        throw new Error('Error fetching announcement: ' + (err as Error).message);
    }
};

export const createAnnouncement = async (role_id: number, description: string, title: string): Promise<void> => {
    try {
        await AnnouncementRepo.createAnnouncement(role_id, description, title);
    } catch (err) {
        console.log(err);
        throw new Error('Error creating announcement: ' + (err as Error).message);
    }
};

export const updateAnnouncement = async (announcement: AnnouncementModel): Promise<void> => {
    try {
        await AnnouncementRepo.updateAnnouncement(announcement);
    } catch (err) {
        throw new Error('Error updating announcement: ' + (err as Error).message);
    }
};

export const deleteAnnouncement = async (id: number): Promise<void> => {
    try {
        await AnnouncementRepo.deleteAnnouncement(id);
    } catch (err) {
        throw new Error('Error deleting announcement: ' + (err as Error).message);
    }
};