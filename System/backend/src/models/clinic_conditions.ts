export class ClinicConditions{
    id?: number;
    student_id: number;
    condition_name: string;
    description: string;  
    is_deleted: number;

    constructor (
    id: number,
    student_id: number,
    condition_name: string,
    description: string,
    is_deleted: number,
    
    ){
    this.id = id;
    this.student_id = student_id;
    this.condition_name = condition_name;
    this.description =description;
    this.is_deleted = is_deleted;
    }
}