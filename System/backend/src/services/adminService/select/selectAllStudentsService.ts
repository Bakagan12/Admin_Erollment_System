import {selectAllStudents} from "../../../repository/adminRepository/select/selectAllStudentsRepo";

export const getAllStudents = async (): Promise<any[]> => {
    try {
        const students = await selectAllStudents.getAllStudents();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
};