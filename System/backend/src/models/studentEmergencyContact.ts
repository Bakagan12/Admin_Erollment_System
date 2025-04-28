export class StudentEmergencyContact{
   name: string;
    suffix_id: number;
    address: string;
    contact_no: string;
    email_address: string;
    relationship: string;
    constructor(
        name:string,
        suffix_id:number,
        address:string,
        contact_no:string,
        email_address:string,
        relationship: string,
    ){
        this.name = name,
        this.suffix_id = suffix_id,
        this. address = address,
        this.contact_no = contact_no,
        this.email_address = email_address,
        this.relationship = relationship
    }
}