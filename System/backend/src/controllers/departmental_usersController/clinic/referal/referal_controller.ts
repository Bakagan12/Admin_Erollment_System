import { Request, Response } from "express";
import { ReferalService } from "../../../../services/departmental_userService/clinic/referal/referal_service";

export class ReferalController {
    static async create(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const result = await ReferalService.createReferal(id, data);
            res.status(201).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async get(req: Request, res: Response) {
        try {
            const result = await ReferalService.getReferal();
            if (result) {
                res.status(200).json({ success: true, data: result });
            } else {
                res.status(404).json({ success: false, message: "Referal not found" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await ReferalService.updateReferal(id, req.body);
            if (result) {
                res.status(200).json({ success: true, data: result });
            } else {
                res.status(404).json({ success: false, message: "Referal not found" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await ReferalService.deleteReferal(id);
            if (result) {
                res.status(200).json({ success: true, message: "Referal deleted successfully" });
            } else {
                res.status(404).json({ success: false, message: "Referal not found" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async find(req: Request, res: Response) {
        try {
            const query = req.query;
            const result = await ReferalService.findReferals(query);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }
}
