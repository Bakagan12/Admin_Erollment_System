import bcrypt from 'bcryptjs';
import { GenUser } from '../../../../models/genUser';
import { User } from '../../../../repository/adminRepository/user_and _role/user/userRepo';

export class UserService {
 
  static async getByUserIdOnAdminPage(user_id: number) {
    return User.findByUserIdOnAdminPage(user_id);
  }
  static async getByRoleIdOnAdminPage(roleId: number) {
    return User.findByUserRoleIdOnAdminPage(roleId);
  }

  static async createUser(user: any) {
    return User.create(user);
  }

  static async getAllUsersOnAdminPage() {
    return User.fetchAllUSersOnAdminPage();
  }

  static async updateUser(userId: string, user: any) {
   // Check if a password was provided, then hash it
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
    return User.update(userId, user);
  }

  static async deleteUser(userId: string) {
    return User.delete(userId);
  }
}
