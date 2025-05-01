import { getRoles, createRole, updateRole, deleteRole, getRoleById } from "../../../services/adminService/select/selectAllRolesService";
import { UserRoles } from "../../../models/userRoles";

// Get all active roles
export const selectAllRolesController = async (req: any, res: any): Promise<void> => {
    try {
        const roles = await getRoles();
        res.status(200).json(roles);
    } catch (error: any) {
        console.error('Error fetching roles:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching roles',
            error: error.message || 'Unknown error',
        });
    }
};

// Create a new role
export const createRoleController = async (req: any, res: any): Promise<void> => {
    try {
        const user: UserRoles = req.body;  // Assuming the new role data is in the request body
        const roleId = await createRole(user);
        const newRole = await getRoleById(roleId);
        res.status(201).json({
            success: true,
            message: 'Role created successfully',
            data: newRole,
        });
    } catch (error: any) {
        console.error('Error creating role:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating role',
            error: error.message || 'Unknown error',
        });
    }
};

// Update an existing role
export const updateRoleController = async (req: any, res: any): Promise<void> => {
    try {
        const {roleID} = req.params;
        const role: UserRoles = req.body;  // The updated role data from the request body
        const updatedCount = await updateRole(role, roleID);

        if (updatedCount === 0) {
            res.status(404).json({
                success: false,
                message: 'Role not found or no changes made',
            });
            return;
        }
        const updatedRole = await getRoleById(roleID);
        res.status(200).json({
            success: true,
            updatedRole: updatedRole,
            message: 'Role updated successfully',
        });
    } catch (error: any) {
        console.error('Error updating role:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating role',
            error: error.message || 'Unknown error',
        });
    }
};

// Delete a role by ID
export const deleteRoleController = async (req: any, res: any): Promise<void> => {
    try {
        const { roleID } = req.params;
        const is_deleted_by  = req.body;
        const result = await deleteRole(Number(roleID), is_deleted_by);
        res.status(201).json({
            success: true,
            message: 'Role deleted successfully'
        });
    } catch (error: any) {
        res.status(500).json({ message: 'Error deleting user: ' + (error as Error).message });
    }
};




