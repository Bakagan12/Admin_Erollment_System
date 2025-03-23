import { getRoles, createRole, updateRole, deleteRole } from "../../../services/adminService/select/selectAllRolesService";
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
        res.status(201).json({
            success: true,
            message: 'Role created successfully',
            data: { roleId },
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
        const user: UserRoles = req.body;  // The updated role data from the request body
        const updatedCount = await updateRole(user);
        
        if (updatedCount === 0) {
            res.status(404).json({
                success: false,
                message: 'Role not found or no changes made',
            });
            return;
        }

        res.status(200).json({
            success: true,
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
      console.log('Request Body:', req.body);  // Log the request body to see if 'id' is there
      const role: UserRoles  = req.body;

      const result = await deleteRole(role);

      res.status(201).json({
            success: true,
            message: 'Role deleted successfully'
        });
    } catch (error: any) {
      console.error('Error deleting role:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting role',
        error: error.message || 'Unknown error',
      });
    }
};


