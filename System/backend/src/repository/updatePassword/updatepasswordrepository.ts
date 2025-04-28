import db from "../../config/db";

export const updateUserPasswordInDB = async (user_id: number, newPassword: string): Promise<any> => {
  return db('gen_users')
    .where('id', user_id)
    .update({ password: newPassword });
};
