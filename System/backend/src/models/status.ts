import db from "../config/db";

export class Status{
    id?: number;
    status_name:string;

    constructor(id: number, status_name:string){
        this.id = id;
        this.status_name =status_name;
    }
     static async getAll(): Promise<Status[]> {
        const results = await db('status').select('*');
        return results.map(row => new Status(row.id, row.status_name));
    }
}