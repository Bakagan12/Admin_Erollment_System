import { Request, Response } from "express";
import { UserRoles } from "../../../../models/userRoles";
import { RoleService } from "../../../../services/adminService/user_and_role/role/roleService";

export class RoleController {
  static async getRoleList(req: Request, res: Response) {
    try {
      const roles = await RoleService.getRoleList();
      res.json(roles);
    } catch (err) {
      res.status(500).json({ message: "Error fetching roles", error: err });
    }
  }

  static async createRole(req: Request, res: Response) {
    try {
      const role = req.body as UserRoles;
      await RoleService.createRole(role);
      res.status(201).json({ message: "Role created successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error creating role", error: err });
    }
  }

  static async updateRole(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const role = req.body;
      await RoleService.updateRole(id, role);
      res.json({ message: "Role updated successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating role", error: err });
    }
  }
  static async updateRoleStatus(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const status = req.body;
      await RoleService.updateRoleStatus(id, status);
      res.json({ message: "Role updated successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating role", error: err });
    }
  }

  static async deleteRole(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deletedBy = req.body.deleted_by;
      await RoleService.deleteRole(id, deletedBy);
      res.json({ message: "Role deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting role", error: err });
    }
  }
}
