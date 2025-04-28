import db from "../config/db";

export class GradeLevel{
    id?:number;
    level_name:string;
    term_id:number;
    is_current:number;
    is_active:number;
    is_deleted:number;
    created_by:number;
    updated_by: number;
    constructor(
        id: number,
        level_name:string,
        term_id:number,
        is_current:number,
        is_active:number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
        this.id = id;
        this.level_name = level_name;
        this.term_id = term_id;
        this.is_current = is_current;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
     static async getAll(): Promise<GradeLevel[]> {
        const results = await db('grade_level').select('*');
        return results.map(row => new GradeLevel(
            row.id,
            row.level_name,
            row.term_id,
            row.is_active,
            row.is_current,
            row.is_deleted,
            row.created_by,
            row.updated_by
        ));
    }
}