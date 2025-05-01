import { Request, Response } from "express";
import { updateUserPassword } from "../../services/updatepassword/updatepasswordservices";

export const handleUpdateUserPassword = async (req: Request, res: Response) => {
  try {
    const user_id = Number(req.params.id);
    const { newPassword } = req.body;
    const result = await updateUserPassword(user_id, newPassword);
    res.status(200).json({ message: "Password updated successfully", results:{user_id, newPassword} });
  } catch (error) {
    res.status(500).json({ message: "Failed to update password", error });
  }
};
