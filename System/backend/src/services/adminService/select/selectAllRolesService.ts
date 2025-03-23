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
export const updateRole = async (user: UserRoles): Promise<number> => {
    try {
        const updatedCount = await selectRoles.updateRole(user);
        return updatedCount; // Return the count of updated rows
    } catch (err) {
        throw new Error('Error updating role: ' + (err as Error).message);
    }
}

// Delete a role by id
export const deleteRole = async (role: UserRoles): Promise<number> => {
    try {
        const deletedCount = await selectRoles.deleteRole(role);
        return deletedCount; // Return the count of deleted rows
    } catch (err) {
        throw new Error('Error deleting role: ' + (err as Error).message);
    }
}
