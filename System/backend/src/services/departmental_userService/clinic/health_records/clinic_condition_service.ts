// services/departmental_userService/clinic/health_record/clinicConditioningService.ts

import { ClinicConditions } from "../../../../models/clinic_conditions";
import { ClinicConditioning } from "../../../../repository/departmental_usersRepository/clinic/health_records/clinic_conditionRepository";

export class ClinicConditioningService {
    static async createCondition(student_id:Number, con: ClinicConditions) {
        return await ClinicConditioning.PostCondition(student_id,con);
    }

    static async getConditions() {
        return await ClinicConditioning.getConditions();
    }

    static async updateCondition(id: number, con: ClinicConditions) {
        return await ClinicConditioning.updateCondition(id, con);
    }

    static async deleteCondition(id: number) {
        return await ClinicConditioning.deleteCondition(id);
    }

    static async findCondition(query: object) {
        return await ClinicConditioning.findCondition(query);
    }
}
