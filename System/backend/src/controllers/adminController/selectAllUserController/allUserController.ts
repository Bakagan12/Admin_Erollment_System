import { Request, Response, NextFunction } from 'express';
import {getAllUsers} from '../../../services/adminService/select/selectAllUserService';

export const fetchAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch users
        const users = await getAllUsers();

        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching users',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};