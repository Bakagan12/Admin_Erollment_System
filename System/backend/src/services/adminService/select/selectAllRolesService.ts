import { selectRoles } from "../../../repository/adminRepository/select/selectRolesRepo";

export const getRoles = async (): Promise<any[]> => {
    try {
        const roles = await selectRoles.getRoles();
        return roles;
    } catch (err) {
        throw new Error('Error fetching roles: ' + (err as Error).message);
    }
}
