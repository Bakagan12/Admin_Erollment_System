import { ClinicInventory } from '../../../../models/clinic_inventory';
import db from "../../../../config/db";

export class ClinicInventoryRepo {
    static async GetAllInventory(): Promise<any> {
        const data = await db("clinic_inventory")
          .leftJoin('students', 'students.id', 'clinic_inventory.student_id')
          .leftJoin('persons', 'persons.id', 'students.person_id')
          .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
          .select(
            "clinic_inventory.*", 
            "persons.first_name", 
            'persons.middle_name', 
            'persons.last_name', 
            'suffix.suffix_name'
          )
          .where("clinic_inventory.is_deleted", 0);
      return data; 
    }
    
    static async CreateInventory(inventory: ClinicInventory): Promise<any> {
        const [id] = await db('clinic_inventory').insert({
            item_name: inventory.item_name,
            quantity_available: inventory.quantity_available,
            unit: inventory.unit,
            expiry_date: inventory.expiry_date,
            is_deleted: inventory.is_deleted
        });
    
        return db('clinic_inventory').where({ id }).first(); // fetch full record by id
    }
    static async UpdateInventory(id: number, inventory: Partial<ClinicInventory>): Promise<any> {
        await db('clinic_inventory')
            .where({ id })
            .update(inventory);
        return db('clinic_inventory').where({ id }).first(); // return updated record
    }
    static async DeleteInventory(id: number): Promise<any> {
        await db('clinic_inventory')
            .where({ id })
            .update({ is_deleted: 1 });
    
        return db('clinic_inventory').where({ id }).first(); // return after soft delete
    }
    static async FindById(id: number): Promise<any> {
        return db('clinic_inventory')
            .where({ id, is_deleted: 0 })
            .first();
    }
}
