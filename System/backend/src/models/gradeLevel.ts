import { update } from "../config/db";

export class GradeLevel{
    level_name:string;
    term_id:number;
    is_active:number;
    is_deleted:number;
    created_by:number;
    updated_by: number;
    constructor(
        level_name:string,
        term_id:number,
        is_active:number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
        this.level_name = level_name;
        this.term_id = term_id;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}