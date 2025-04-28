export class AnnouncementModel{
    id?: number;
    title: string;
    description: string;
    send_to_role_id: number;
    status_id: number;
    is_deleted: number;
    updated_by: number;
    constructor(
        id:number,
        title: string,
        description: string,
        send_to_role_id: number,
        status_id: number,
        is_deleted: number,
        updated_by: number
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.send_to_role_id = send_to_role_id;
        this.status_id = status_id;
        this.is_deleted = is_deleted;
        this.updated_by = updated_by;
    }
}