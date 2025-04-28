import * as selectUsers from '../../../services/adminService/select/selectUserService'
import { Request, Response, NextFunction } from 'express';

export const fetchAllStudents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await selectUsers.getAllStudents();

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

export const fetchAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch teachers
        const teachers = await selectUsers.getAllTeachers();

        res.status(200).json(teachers);
    } catch (err) {
        console.error('Error fetching teachers:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching teachers',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};

export const fetchAllStudentsFromRegistrar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await selectUsers.getAllStudentsFromRegistrar();

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
export const fetchAllStudentsFromCashier = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await selectUsers.getAllStudentsFromCashier();

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

export const fetchAllStudentsFromGuidance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await selectUsers.getAllStudentsFromGuidance();

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}
// passStudentsFromGuidance
export const passStudentsFromGuidance = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const enrollment_id = req.body.enrollment_id;
        const students = await selectUsers.passStudentsFromGuidance(enrollment_id);

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}
export const StudentsApprovefromCashierController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const enrollment_id = req.body.enrollment_id;
        const students = await selectUsers.StudentsApprovefromCashierService(enrollment_id);

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}
export const StudentsApprovefromGuidanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const enrollment_id = req.body.enrollment_id;
        const students = await selectUsers.StudentsApprovefromGuidanceService(enrollment_id);

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}
export const StudentsApprovefromRegistrarController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const enrollment_id = req.body.enrollment_id;
        const students = await selectUsers.StudentsApprovefromRegistrarService(enrollment_id);

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}
export const StudentsApprovefromRegistrarEnrolledController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const enrollment_id = req.body.enrollment_id;
        const students = await selectUsers.StudentsApprovefromRegistrarEnrolledService(enrollment_id);

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}