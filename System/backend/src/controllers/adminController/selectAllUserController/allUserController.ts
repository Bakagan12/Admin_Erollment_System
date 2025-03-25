import { Request, Response, NextFunction } from 'express';
import {getAllUsers, createUser, updateUser, deleteUser} from '../../../services/adminService/select/selectAllUserService';

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
// Controller to create a new user
export const createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user: ' + (err as Error).message });
    }
};

// Controller to update an existing user
export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const updatedUser = await updateUser(Number(userId), userData);
        res.status(200).json(["User updated Successfully! "]);
    } catch (err) {
        res.status(500).json({ message: 'Error updating user: ' + (err as Error).message });
    }
};

// Controller to soft delete a user
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const { deletedBy } = req.body;
        const deletedUser = await deleteUser(Number(userId), deletedBy);
        res.status(200).json("User deleted Successfully!");
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user: ' + (err as Error).message });
    }
};