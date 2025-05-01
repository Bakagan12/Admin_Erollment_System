import bcrypt from "bcrypt";
import { updateUserPasswordInDB } from "../../repository/updatePassword/updatepasswordrepository";

export const updateUserPassword = async (user_id: number, newPassword: string) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  return await updateUserPasswordInDB(user_id, hashedPassword);
};
