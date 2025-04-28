import { Request, Response } from "express";
import gen_user_roleRepo from "./gen_user_role.repo";

export async function get(req: Request, res: Response){
    const query = req.query;
    const users = await gen_user_roleRepo.find(query);
    return res.json(users);
}
export async function update(req: Request, res: Response){
    
}
export async function insert(req: Request, res: Response){
    // const users = {username, password,};
}
// export async function remove(req: Request, res: Response){
//     const id = req.params.id;
//     await gen_user_roleRepo.update(id,{is_deleted: 0});
// }