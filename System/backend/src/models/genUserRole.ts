export class GenUserRoles{
    id?: number;
    gen_user_id: number;
    user_role_id: number;
    deleted_by: number;

    constructor(
        id: number,
        gen_user_id: number,
        user_role_id: number,
        deleted_by: number){
            this.id =id;
            this.gen_user_id = gen_user_id;
            this.user_role_id = user_role_id;
            this.deleted_by = deleted_by;
        }
}