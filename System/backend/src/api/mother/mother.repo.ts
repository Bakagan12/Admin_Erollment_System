import CrudRepo from "../utils/crud-repo";

export interface Mother{
    id: number;
    first_name:string;
    middle_name:string;
    last_name:string;
    suffix_id:number;
    contact_no:string;
    address:string;
    email_address:string;
    occupation:string;
    occ_address:string;
}

export default new CrudRepo<Mother>("mother");