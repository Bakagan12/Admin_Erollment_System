import { ClinicVisits } from "../../../../models/clinic_visits";
import { Referal } from "../../../../repository/departmental_usersRepository/clinic/referal/referal";

export class ReferalService {
    static async createReferal(student_id:Number, visits: ClinicVisits) {
        return await Referal.PostRefer(student_id,visits);
    }

    static async getReferal() {
        return await Referal.getReferal();
    }

    static async updateReferal(id: number, visits: ClinicVisits) {
        return await Referal.updateReferal(id, visits);
    }

    static async deleteReferal(id: number) {
        return await Referal.deleteReferal(id);
    }

    static async findReferals(query: object) {
        return await Referal.findReferals(query);
    }
}
