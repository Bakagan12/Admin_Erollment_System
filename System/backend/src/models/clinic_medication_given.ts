export class ClinicMedicationGiven{
    id?: number;
    visit_id: number;
    inventory_item_id: number;
    quality_given:string;
   

    constructor (
    id: number,
    visit_id: number,
    inventory_item_id: number,
    quality_given:string,

    ){
    this.id = id;
    this.visit_id = visit_id;
    this.inventory_item_id = inventory_item_id;
    this.quality_given = quality_given;
    }
}