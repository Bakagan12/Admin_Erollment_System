import { Request } from "../../../../models/request";
import { Requesting } from "../../../../repository/departmental_usersRepository/clinic/clinic_inventory/request";

export class RequestService {
    static async createRequest(req: Request) {
        return await Requesting.PostRequest(req);
    }

    static async getRequests() {
        return await Requesting.GetRequests();
    }

    static async updateRequest(id: number, data: Partial<Request>) {
        return await Requesting.UpdateRequest(id, data);
    }

    static async deleteRequest(id: number) {
        return await Requesting.DeleteRequest(id);
    }

    static async findRequest(id: number) {
        return await Requesting.FindRequest(id);
    }
}
