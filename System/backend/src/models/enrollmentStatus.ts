import db from "../config/db";

export class EnrollmentStatus{
    id?:number;
    name:string;
    is_deleted: number;

    constructor(
        id:number,
        name:string,
        is_deleted:number
    ){
        this.id = id;
        this.name = name;
        this.is_deleted = is_deleted;
    }

     static async getAll(): Promise<EnrollmentStatus[]> {
        const results = await db('enrollment_status').select('*');
        return results.map(row => new EnrollmentStatus(
            row.id,
            row.name,
            row.is_deleted
        ));
    }
}