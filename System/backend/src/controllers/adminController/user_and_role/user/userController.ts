import { Request, Response } from 'express';
import { UserService } from '../../../../services/adminService/user_and_role/user/userService';


export class UserOnAdminController {
   static async getByUserOnAdminPage(req: Request, res: Response) {
    const user_id = req.query.user_id;
    const result = await UserService.getByUserIdOnAdminPage(Number(user_id));
    res.json(result);
  }
  static async getByRoleOnAdminPage(req: Request, res: Response) {
    const { roleId } = req.params;
    const result = await UserService.getByRoleIdOnAdminPage(Number(roleId));
    res.json(result);
  }

  static async create(req: Request, res: Response) {
    const result = await UserService.createUser(req.body);
    res.status(201).json(result);
  }

  static async getAllUsersOnAdminPage(req: Request, res: Response) {
    const result = await UserService.getAllUsersOnAdminPage();
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const result = await UserService.updateUser(id, req.body);
    res.json(result);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    res.json(result);
  }
}
