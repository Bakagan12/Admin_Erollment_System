import { Request, Response, NextFunction } from 'express';
import {getAllStudents} from '../../../services/adminService/select/selectAllStudentsService';

export const fetchAllStudents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await getAllStudents();

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};