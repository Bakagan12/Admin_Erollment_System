import { GenUser } from "../../models/genUser";

export class GenUserService {
  static async getUserByEmail(email: string): Promise<GenUser | null> {
    return await GenUser.findByEmail(email);
  }
}