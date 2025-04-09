import { UserService } from "../../../repository/adminRepository/select/selectAllUsersRepo";

export const getAllUsers = async (): Promise<any[]> => {
    try {
        const users = await UserService.getAllUsers();
        return users;
    } catch (err) {
        throw new Error('Error fetching users: ' + (err as Error).message);
    }
};

// Create a new user
export const createUser = async (userData: any): Promise<any> => {
    try {
        const newUser = await UserService.createUser(userData);
        return newUser;
    } catch (err) {
        throw new Error((err as Error).message);
    }
};

// Update an existing user
export const updateUser = async (userId: number, userData: any): Promise<any> => {
    try {
        const updatedUser = await UserService.updateUser(userId, userData);
        return updatedUser;
    } catch (err) {
        console.error('Service error in updateUser:', err);
        throw new Error('Error updating user: ' + (err as Error).message);
    }
};

// Soft delete a user
export const deleteUser = async (userId: number, deletedBy: number): Promise<any> => {
    try {
        const deletedUser = await UserService.deleteUser(userId, deletedBy);
        return deletedUser;
    } catch (err) {
        throw new Error('Error deleting user: ' + (err as Error).message);
    }
};
