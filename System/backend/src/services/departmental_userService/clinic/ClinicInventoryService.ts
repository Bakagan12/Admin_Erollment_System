import { ClinicInventory } from "../../../models/clinic_inventory";
import { ClinicInventoryRepo } from "../../../repository/departmental_usersRepository/clinic/clinic_inventory/clinic_inventory";

export class ClinicInventoryService {
    static async getAllInventory() {
        return ClinicInventoryRepo.GetAllInventory();
    }

    static async createInventory(data: ClinicInventory) {
        return ClinicInventoryRepo.CreateInventory(data);
    }
    

    static async updateInventory(id: number, data: Partial<ClinicInventory>) {
        return ClinicInventoryRepo.UpdateInventory(id, data);
    }
    
    static async deleteInventory(id: number) {
        return ClinicInventoryRepo.DeleteInventory(id);
    }
    

    static async findInventoryById(id: number) {
        return ClinicInventoryRepo.FindById(id);
    }
}
