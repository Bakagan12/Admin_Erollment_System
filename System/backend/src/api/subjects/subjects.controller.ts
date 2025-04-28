import { Request, Response } from "express";
import subjectsRepo from "./subjects.repo";

export async function get(req: Request, res: Response){
    const query = req.query;
    const users = await subjectsRepo.find(query);
    return res.json(users);
}
export async function update(req: Request, res: Response){
    const id = req.params.id;
        
    const {
        subject_name,
        grade_level_id,
        term_id,
        is_current,
        is_deleted,
        is_deleted_by,
        created_by,
        updated_by,
    } = req.body;

    const updatesubjectsRepo = await subjectsRepo.update(id, {
      subject_name: subject_name,
      grade_level_id: grade_level_id,
      term_id: term_id,
      is_current: is_current,
      is_deleted: is_deleted,
      is_deleted_by: is_deleted_by,
      created_by: created_by,
      updated_by: updated_by,
    });
    res.status(200).json({
  message: 'Subject updated successfully',
  data: updatesubjectsRepo,
});
}
export async function insert(req: Request, res: Response){
    // const users = {username, password,};
}
export async function remove(req: Request, res: Response){
    const id = req.params.id;
    await subjectsRepo.update(id,{is_deleted: 0});
}