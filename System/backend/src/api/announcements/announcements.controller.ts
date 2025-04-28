import { Request, Response } from "express";
import announcementsRepo from "./announcements.repo";

export async function get(req: Request, res: Response){
    const query = req.query;
    const users = await announcementsRepo.find(query);
    return res.json(users);
}
export async function update(req: Request, res: Response){
    const id = req.query.id as string;
     const {
      title,
      description,
      send_to_role_id,
      status_id,
      is_deleted,
      updated_by,
    } = req.body;

    const updateData = {
      title,
      description,
      send_to_role_id,
      status_id,
      is_deleted,
      updated_by,
    };
    await announcementsRepo.update(id,updateData)
}
export async function insert(req: Request, res: Response){
    // const users = {username, password,};
}
export async function remove(req: Request, res: Response){
    const id = req.params.id;
    await announcementsRepo.update(id,{is_deleted: 0});
}