
import {selectAllUsers} from "../../../repository/adminRepository/select/selectAllUsersRepo";

export const getAllUsers = async (): Promise<any[]> => {
    try {
        const users = await selectAllUsers.getAllUsers();
        return users;
    } catch (err) {
        throw new Error('Error fetching users: ' + (err as Error).message);
    }
};