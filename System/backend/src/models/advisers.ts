export class Adviser{
    id?: number;
    gen_user_id: number;
    section_id: number;
    constructor(id:number, gen_user_id: number, section_id:number){
        this.id = id;
        this.gen_user_id = gen_user_id;
        this.section_id = section_id
    }
}