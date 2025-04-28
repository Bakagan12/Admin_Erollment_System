import CrudRepo from "../utils/crud-repo";

export interface Adviser{
    id?: number;
    gen_user_id: number;
    section_id: number;
}

export default new CrudRepo<Adviser>("advisers");