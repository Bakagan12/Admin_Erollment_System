import db from "../config/db";
export class UserRoles{
    id?: number;
    role_name:string;
    is_active:number;
    is_deleted:number;
    is_deleted_by:number;
    created_by:number;
    updated_by:number;

    constructor(
        id: number,
        role_name:string,
        is_active:number,
        is_deleted:number,
        is_deleted_by:number,
        created_by:number,
        updated_by:number,
    ){
        this.id = id;
        this.role_name = role_name;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }

    static async getAll(): Promise<UserRoles[]> {
        const results = await db('user_roles').select('*');
        return results.map(row => new UserRoles(
            row.id,
            row.role_name,
            row.is_active,
            row.is_deleted,
            row.is_deleted_by,
            row.created_by,
            row.updated_by
        ));
    }
}