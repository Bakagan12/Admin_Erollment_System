import db from "../config/db";

export class Suffix {
    id?: number;
    suffix_name: string;

    constructor(id: number, suffix_name: string) {
        this.id = id;
        this.suffix_name = suffix_name;
    }

    static async getAll(): Promise<Suffix[]> {
        const results = await db('suffix').select('*');
        return results.map(row => new Suffix(row.id, row.suffix_name));
    }
}