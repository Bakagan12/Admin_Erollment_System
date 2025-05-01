import CrudRepo from "../utils/crud-repo";

export interface Sections{
    id:number;
    section_name: string;
    grade_level_id: number;
    term_id:number;
    is_active:number;
    is_current:number;
    is_deleted:number;
    created_by:number;
    updated_by:number;
}

export default new CrudRepo<Sections>("sections");