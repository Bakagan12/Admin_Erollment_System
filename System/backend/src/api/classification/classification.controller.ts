import { Request, Response } from "express";
import classificationRepo from "./classification.repo";
export async function get(req: Request, res: Response){
    const query = req.query;
    const users = await classificationRepo.find(query);
    return res.json(users);
}
export async function update(req: Request, res: Response){
    
}
export async function insert(req: Request, res: Response){
    // const users = {username, password,};
}
export async function remove(req: Request, res: Response){
    const id = req.params.id;
    await classificationRepo.update(id,{is_deleted: 0});
}