import { Request, Response } from "express";
import payment_methodRepo from "./payment_method.repo";

export async function get(req: Request, res: Response){
    const query = req.query;
    const users = await payment_methodRepo.find(query);
    return res.json(users);
}
export async function update(req: Request, res: Response){
    
}
export async function insert(req: Request, res: Response){
    // const users = {username, password,};
}
// export async function remove(req: Request, res: Response){
//     const id = req.params.id;
//     await payment_methodRepo.update(id,{is_deleted: 0});
// }