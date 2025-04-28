import CrudRepo from "../utils/crud-repo";

export interface Subject{
    id:number;
    subject_name: string;
    grade_level_id: number;
    term_id:number;
    is_current:number;
    is_deleted:number;
    is_deleted_by:number;
    created_by:number;
    updated_by:number;
}

export default new CrudRepo<Subject>("subjects");