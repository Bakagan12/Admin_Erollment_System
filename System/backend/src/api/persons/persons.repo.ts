import CrudRepo from "../utils/crud-repo";

export interface Person{

    id:number;
    first_name: string;
    last_name: string;
    middle_name: string;
    suffix_id: number;
    age: number;
    date_of_birth: Date;
    place_of_birth: string;
    gender: string;
    citizenship: string;
    address: number;
    email: string;
    contact_no: string;
    student_guardian_id: number;
    student_emergency_contact_name: string;
    student_emergency_contact_no: string;
    student_emergency_contact_address: string;
    student_emergency_contact_email: string;
    student_medical_history_id: number;
}

export default new CrudRepo<Person>("persons");