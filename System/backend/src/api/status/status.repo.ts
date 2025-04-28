import CrudRepo from "../utils/crud-repo";

export interface Status{
    id:number;
     status_name:string;
}

export default new CrudRepo<Status>("status");