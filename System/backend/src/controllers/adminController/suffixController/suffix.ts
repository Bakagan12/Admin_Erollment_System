import { Request, Response, NextFunction } from 'express';
import { getAllSuffix } from '../../../services/adminService/select/selectAllSuffix';

export const fetchAllSuffix = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const suffix = await getAllSuffix();

        res.status(200).json(suffix);
    } catch (err) {
        console.error('Error fetching suffix:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching suffix',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};