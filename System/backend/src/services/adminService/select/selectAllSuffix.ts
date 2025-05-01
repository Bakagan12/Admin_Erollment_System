import { Suffix } from "../../../repository/adminRepository/select/selectsuffixRepo";

export const getAllSuffix = async (): Promise<any[]> => {
    try {
        const suffix = await Suffix.get_all_suffix();
        return suffix;
    } catch (err) {
        throw new Error('Error fetching users: ' + (err as Error).message);
    }
};