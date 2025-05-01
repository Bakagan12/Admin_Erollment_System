import db from "../config/db";

export class StudentStatus{
    id?: number;
    student_status_name:string;

    constructor(id: number, student_status_name:string){
        this.id = id;
        this.student_status_name = student_status_name;
    }

    static async getAll(): Promise<StudentStatus[]> {
        const results = await db('student_status').select('*');
        return results.map(row => new StudentStatus(row.id, row.student_status_name));
    }
}