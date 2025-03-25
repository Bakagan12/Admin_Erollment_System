import { selectRoles } from "../../../repository/adminRepository/select/selectAllRolesRepo";
import { UserRoles } from "../../../models/userRoles";

// Get all active roles
export const getRoles = async (): Promise<any[]> => {
    try {
        const roles = await selectRoles.getRoles();
        return roles;
    } catch (err) {
        throw new Error('Error fetching roles: ' + (err as Error).message);
    }
}

// Create a new role
export const createRole = async (user: UserRoles): Promise<number[]> => {
    try {
        const roleId = await selectRoles.createRole(user);
        return roleId; // Returning the inserted ID of the new role
    } catch (err) {
        throw new Error('Error creating role: ' + (err as Error).message);
    }
}

// Update an existing role
export const updateRole = async (user: UserRoles, roleID: number): Promise<number> => {
    try {
        const updatedCount = await selectRoles.updateRole(user, roleID);
        return updatedCount;
    } catch (err) {
        throw new Error('Error updating role: ' + (err as Error).message);
    }
}

// Delete a role by id
export const deleteRole = async (roleID: number, roleData: any): Promise<number> => {
    try {
        const deletedCount = await selectRoles.deleteRole(roleID, roleData); // Pass roleID and roleData
        return deletedCount; // Return the count of deleted rows
    } catch (err) {
        throw new Error('Error deleting role: ' + (err as Error).message);
    }
}

