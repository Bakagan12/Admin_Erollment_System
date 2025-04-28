import { Request, Response } from "express";
import { ClinicConditioningService } from "../../../../services/departmental_userService/clinic/health_records/clinic_condition_service";

export class ClinicConditioningController {
    static async createCondition(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const result = await ClinicConditioningService.createCondition(id, data);
            res.status(201).json({ success: true,  
                student_id: result.student_id,
                first_name: result.first_name,
                last_name: result.last_name,
                middle_name: result.middle_name,
                condition_name: result.condition_name,
                description: result.description,
                is_deleted: result.is_deleted,
                 });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async getAllConditions(req: Request, res: Response) {
        try {
            const result = await ClinicConditioningService.getConditions();
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }
    

    static async getConditionById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await ClinicConditioningService.findCondition({ id });
            const condition = result.length > 0 ? result[0] : null;

            if (condition) {
                res.status(200).json({ success: true, data: condition });
            } else {
                res.status(404).json({ success: false, message: "Condition not found" });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async updateCondition(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await ClinicConditioningService.updateCondition(id, req.body);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }

    static async deleteCondition(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await ClinicConditioningService.deleteCondition(id);
            res.status(200).json({ success: true, message: result.message });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error", error });
        }
    }
}
