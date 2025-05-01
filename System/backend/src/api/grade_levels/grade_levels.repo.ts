import CrudRepo from "../utils/crud-repo";

export interface GradeLevel{
    id: number;
    level_name:string;
    term_id:number;
    is_current:number;
    is_active:number;
    is_deleted:number;
    created_by:number;
    updated_by: number;
}

export default new CrudRepo<GradeLevel>("grade_level");