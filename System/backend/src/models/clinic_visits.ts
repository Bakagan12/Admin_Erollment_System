export class ClinicVisits{
    id?: number;
    student_id: number;
    visit_date: string;
    reason: string;
    treatment_given: string;
    nurse_notes: string;
    referal_status: number;
    followup_status: number;

    constructor (
        id: number,
        student_id: number,
        visit_date: string,
        reason:string,
        treatment_given: string,
        nurse_notes: string,
        referal_status: number,
        followup_status: number,
        ){
        this.id = id;
        this.student_id = student_id;
        this.visit_date = visit_date;
        this.reason = reason;
        this.treatment_given = treatment_given;
        this.nurse_notes = nurse_notes;
        this.referal_status = referal_status;
        this.followup_status = followup_status;
        }
    }