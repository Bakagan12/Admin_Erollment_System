import { selectUsers } from "../../../repository/adminRepository/select/selectUserRepo";

export const getAllStudents = async (): Promise<any[]> => {
    try {
        const students = await selectUsers.getAllStudents();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}

export const getAllTeachers = async (): Promise<any[]> => {
    try {
        const teachers = await selectUsers.getAllTeachers();
        return teachers;
    } catch (err) {
        throw new Error('Error fetching teachers: ' + (err as Error).message);
    }
}

export const getAllStudentsFromRegistrar = async (): Promise<any[]> => {
    try {
        const students = await selectUsers.getAllStudentsfromRegistrar();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}

export const getAllStudentsFromCashier = async (): Promise<any[]> => {
    try {
        const students = await selectUsers.getAllStudentsfromCashier();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}

export const getAllStudentsFromGuidance = async (): Promise<any[]> => {
    try {
        const students = await selectUsers.getAllStudentsfromGuidance();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}
export const passStudentsFromGuidance = async (enrollment_id: number): Promise<any> => {
    try {
        const students = await selectUsers.PassStudentsFromGuidanceRepo(enrollment_id);
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}

export const StudentsApprovefromCashierService = async (enrollment_id: number): Promise<any> => {
    try {
        const students = await selectUsers.StudentsApprovefromCashierRepo(enrollment_id);
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}

export const StudentsApprovefromGuidanceService = async (enrollment_id: number): Promise<any> => {
    try {
        const students = await selectUsers.StudentsApprovefromGuidanceRepo(enrollment_id);
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}
export const StudentsApprovefromRegistrarService = async (enrollment_id: number): Promise<any> => {
    try {
        const students = await selectUsers.StudentsApprovefromRegistrarRepo(enrollment_id);
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}
export const StudentsApprovefromRegistrarEnrolledService = async (enrollment_id: number): Promise<any> => {
    try {
        const students = await selectUsers.StudentsApprovefromRegistrarEnrolledRepo(enrollment_id);
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
}
