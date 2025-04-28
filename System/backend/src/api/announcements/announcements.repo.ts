import CrudRepo from "../utils/crud-repo";

export interface Announcement{
    id: number;
    title: string;
    description: string;
    send_to_role_id: number;
    status_id: number;
    is_deleted: number;
    updated_by: number;
}

export default new CrudRepo<Announcement>("announcements");