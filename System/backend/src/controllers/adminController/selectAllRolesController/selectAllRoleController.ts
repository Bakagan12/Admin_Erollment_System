import { getRoles } from "../../../services/adminService/select/selectAllRolesService";

export const selectAllRolesController = async (req: any, res: any): Promise<void> => {
    try {
        const roles = await getRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching roles' });
    }
}