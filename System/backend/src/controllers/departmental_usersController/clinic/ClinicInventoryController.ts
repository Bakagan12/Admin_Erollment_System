import { Request, Response } from "express";
import { ClinicInventoryService } from "../../../services/departmental_userService/clinic/ClinicInventoryService";

export class ClinicInventoryController {
    static async getAll(req: Request, res: Response) {
        const data = await ClinicInventoryService.getAllInventory();
        res.json(data);
    }

    static async create(req: Request, res: Response) {
        const data = await ClinicInventoryService.createInventory(req.body);
        res.json({
            message: "Inventory created",
            id: data.id,
            item_name: data.item_name,
            quantity: data.quantity_available,
            unit: data.unit,
            expiry: data.expiry_date,
            deleted: data.is_deleted
        });
    }
    
    static async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = await ClinicInventoryService.updateInventory(id, req.body);
        res.json({ message: "Inventory updated", data });
    }
    
    static async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = await ClinicInventoryService.deleteInventory(id);
        res.json({ message: "Inventory deleted", data });
    }
    

    static async findById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = await ClinicInventoryService.findInventoryById(id);
        res.json(data);
    }
}
