import CrudRepo from "../utils/crud-repo";

export interface ClinicVisits{
    id: number;
    student_id: number;
    visit_date: string;
    reason: string;
    treatment_given: string;
    nurse_notes: string;
    referal_status: number;
    followup_status: number;
}

export default new CrudRepo<ClinicVisits>("clinic_visits");