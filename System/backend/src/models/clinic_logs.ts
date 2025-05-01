export class ClinicLogs{
    id?: number;
    student_id: number;
    activity_type: string;
    incident_description: string;  
    treatment: string;  
    incident_status: string;  
    is_deleted: string;  

    constructor (
    id: number,
    student_id: number,
    activity_type: string,
    incident_description: string,
    treatment: string,
    incident_status: string,  
    is_deleted: string,  


    ){
    this.id = id;
    this.student_id = student_id;
    this.activity_type = activity_type;
    this.incident_description = incident_description;
    this.treatment = treatment;
    this.incident_status = incident_status;
    this.is_deleted = is_deleted;

        
    }
}