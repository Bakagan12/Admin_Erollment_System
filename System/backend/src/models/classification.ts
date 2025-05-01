import db from "../config/db";
export class Classification{
    id?: number;
    name: string;
    is_deleted: number;
    is_updated_by: number;

    constructor(
        id: number,
        name: string,
        is_deleted: number,
        is_updated_by: number
    ){
        this.id = id;
        this.name = name;
        this.is_deleted = is_deleted;
        this.is_updated_by = is_updated_by;

    }

    static async getAll(): Promise<Classification[]> {
        const results = await db('classification').select('*');
        return results.map(row => new Classification(
            row.id,
            row.name,
            row.is_deleted,
            row.is_updated_by
        ));
    }
}