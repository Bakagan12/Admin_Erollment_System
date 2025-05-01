import { Request, Response, NextFunction } from 'express';
import {getAllUsers, createUser, updateUser, deleteUser} from '../../../services/adminService/select/selectAllUserService';
import { UserService } from '../../../repository/adminRepository/select/selectAllUsersRepo';

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
        res.status(201).json({
            message: 'User created successfully',
            user: newUser  // Include the created user details
        });
    } catch (err) {
        res.status(500).json({ message:(err as Error).message });
    }
};

// Controller to update an existing user
export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const updatedUser = await updateUser(Number(userId), userData);

        // Send back the updated user data
        if (updatedUser) {
            const fetchedUser = await UserService.getAllUsers(); // Assuming you'll fetch all users and return
            const updatedUserDetails = fetchedUser.find(user => user.user_id === Number(userId));
            res.status(200).json({
                message: "User updated successfully!",
                data: updatedUserDetails
            });
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating user: ' + (err as Error).message });
    }
};

// Controller to soft delete a user
// Controller to soft delete a user
export const deleteUserController = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userId } = req.params;
        const { deletedBy } = req.body;
        
        // Fetch the user details before deletion
        const fetchedUser = await UserService.getAllUsers();
        const userToDelete = fetchedUser.find(user => user.user_id === Number(userId));

        if (!userToDelete) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Perform the soft delete
        const deletedUser = await deleteUser(Number(userId), deletedBy);

        if (deletedUser) {
            res.status(200).json({
                message: "User deleted successfully!",
                data: userToDelete // Send back the user data that was deleted
            });
        } else {
            res.status(500).json({ message: "Error deleting user!" });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user: ' + (err as Error).message });
    }
};
