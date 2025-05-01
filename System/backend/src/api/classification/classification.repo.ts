import CrudRepo from "../utils/crud-repo";

export interface Classification{
    id: number;
    name: string;
    is_deleted: number;
    is_updated_by: number;
}

export default new CrudRepo<Classification>("classification");