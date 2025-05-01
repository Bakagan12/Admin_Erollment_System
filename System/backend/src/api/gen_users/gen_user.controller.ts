import { Request, Response } from "express";
import gen_usersRepo from "./gen_users.repo";

// 🔍 GET Users
export async function get(req: Request, res: Response) {
  try {
    const query = req.query;
    const users = await gen_usersRepo.find(query);
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users", error });
  }
}

export async function insert(req: Request, res: Response) {
  const {
    username,
    gen_user_email,
    password,
    person_id,
    guardian_id,
    user_role_id,
    change_pass_code,
    status_id,
    is_emailed,
    is_deleted,
    is_deleted_by,
  } = req.body;

  try {
    const newUser = await gen_usersRepo.insert({
      username,
      gen_user_email,
      password,
      person_id,
      guardian_id,
      user_role_id,
      change_pass_code,
      status_id,
      is_emailed,
      is_deleted,
      is_deleted_by,
    });

    res.status(201).json({
      message: "User created successfully",
      data: req.body
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: "Failed to create user", error });
  }
}

// ✏️ UPDATE User
export async function update(req: Request, res: Response) {
  const id = req.params.id;

  const {
    username,
    gen_user_email,
    password,
    person_id,
    guardian_id,
    user_role_id,
    change_pass_code,
    status_id,
    is_emailed,
    is_deleted,
    is_deleted_by,
  } = req.body;

  try {
    const updatedUser = await gen_usersRepo.update(id, {
      username,
      gen_user_email,
      password,
      person_id,
      guardian_id,
      user_role_id,
      change_pass_code,
      status_id,
      is_emailed,
      is_deleted,
      is_deleted_by,
    });

    res.status(200).json({
      message: "User updated successfully",
      data: req.body,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user", error });
  }
}

// 🗑️ SOFT DELETE User
export async function remove(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const deletedUser = await gen_usersRepo.update(id, { is_deleted: 1 });

    res.status(200).json({
      message: "User soft-deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user", error });
  }
}
