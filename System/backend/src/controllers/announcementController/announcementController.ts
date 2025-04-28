import { Request, Response } from 'express';
import { getAllAnnouncements, getAnnouncementById, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../../services/announcement/announcementService';
import { AnnouncementModel } from '../../models/announcement';

export const fetchAllAnnouncements = async (req: Request, res: Response): Promise<void> => {
    try {
        const announcements = await getAllAnnouncements();
        res.status(200).json(announcements);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};

export const fetchAnnouncementById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        const announcement = await getAnnouncementById(id);
        res.status(200).json(announcement);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};

export const createNewAnnouncement = async (req: Request, res: Response): Promise<void> => {
    try {
        // const role_id = Number(req.params.role_id);
         const { title, description, role_id } = req.body;

        console.log(title);
        await createAnnouncement(role_id, description, title);
        res.status(201).json({ message: 'Announcement created successfully' });
    } catch (err) {
        const error = err as Error; 
         if (error.message === 'There are no users with that role!') {
            res.status(400).json({ message: error.message });  // Bad request if no users found
        } else {
            res.status(500).json({ message: 'Error creating announcement: ' + error.message });
        }
        res.status(500).json({ message: (err as Error).message });
    }
};

export const updateExistingAnnouncement = async (req: Request, res: Response): Promise<void> => {
    try {
        const announcement: AnnouncementModel = req.body;
        await updateAnnouncement(announcement);
        res.status(200).json({ message: 'Announcement updated successfully' });
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};

export const deleteExistingAnnouncement = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        await deleteAnnouncement(id);
        res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};