import { Request, Response } from "express";
import { RequestService } from "../../../../services/departmental_userService/clinic/request/request_service";

export class RequestController {
    static async create(req: Request, res: Response) {
        const data = await RequestService.createRequest(req.body);
        res.json({ message: "Request submitted successfully", data });
    }

    static async get(req: Request, res: Response) {
        const data = await RequestService.getRequests();
        res.json(data);
    }

    static async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = await RequestService.updateRequest(id, req.body);
        res.json({ message: "Request updated", data });
    }

    static async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await RequestService.deleteRequest(id);
        res.json(result);
    }

    static async find(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = await RequestService.findRequest(id);
        res.json(data);
    }
}

