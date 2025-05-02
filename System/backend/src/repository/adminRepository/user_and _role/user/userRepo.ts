import db from "../../../../config/db";
import { v4 as uuidv4 } from 'uuid';
import { GenUser } from "../../../../models/genUser";
import { Persons } from "../../../../models/persons";
import bcrypt from 'bcrypt';

export class User {
  static async findByUserIdOnAdminPage(userId: number): Promise<any> {
    return db('gen_users')
      .leftJoin('gen_user_roles', 'gen_users.id', 'gen_user_roles.gen_user_id')
      .leftJoin('user_roles', 'user_roles.id', 'gen_user_roles.user_role_id')
      .leftJoin('persons', 'persons.id', 'gen_users.person_id')
      .where('gen_users.id', userId)
      .where('gen_users.is_deleted', 0)
      .select(
        'gen_users.*',
        'persons.*',
        'user_roles.role_name'

      );
  }
  static async findByUserRoleIdOnAdminPage(roleId: number): Promise<any> {
    return db('gen_user_roles')
      .leftJoin('gen_users', 'gen_users.id', 'gen_user_roles.gen_user_id')
      .leftJoin('user_roles', 'user_roles.id', 'gen_user_roles.user_role_id')
      .leftJoin('persons', 'persons.id', 'gen_users.person_id')
      .where('gen_user_roles.user_role_id', roleId)
      .select(
        'gen_users.*',
        'persons.*',
        'user_roles.role_name',

      );
  }
  static async create(user: Persons & GenUser): Promise<any> {
    return await db.transaction(async (trx) => {
      // Generate UUID for new user
      const person = await trx('persons').insert({
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        // Optional fields (automatically skipped if undefined or null)
        ...(user.suffix_id && { suffix_id: user.suffix_id }),
        ...(user.age && { age: user.age }),
        ...(user.date_of_birth && { date_of_birth: user.date_of_birth }),
        ...(user.place_of_birth && { place_of_birth: user.place_of_birth }),
        ...(user.gender && { gender: user.gender }),
        ...(user.citizenship && { citizenship: user.citizenship }),
        ...(user.address && { address: user.address }),
        ...(user.email && { email: user.email }),
        ...(user.contact_no && { contact_no: user.contact_no }),
      });
      const personId = person[0];
      const savedPerson = await trx('persons').where('id', personId).first();

      // Now, generate the username with the first_name, last_name, and personId
      const username = `${user.first_name.toLowerCase()}${user.last_name.toLowerCase()}${personId}`;
      const hashedPassword = await bcrypt.hash(user.password, 10);

      // Insert into gen_users table
      const userData = await trx('gen_users').insert({
        person_id: personId,
        username: username,
        password: hashedPassword,
        gen_user_email: user.gen_user_email,
        status_id: 1,
        is_deleted: 0
      });
      const userId = userData[0];
      const savedUser = await trx('gen_users').where('id', userId).first();

      // Insert into gen_user_roles table
      const userRole = await trx('gen_user_roles').insert({
        gen_user_id: userId,
        user_role_id: user.user_role_id,
        deleted_by: 0
      });

      return {
        message: 'User created',
        savedPerson,
        savedUser,
        userRole
      };
    });
  }


  // Fetch all users
  static async fetchAllUSersOnAdminPage(): Promise<any[]> {
    return db('gen_users')
      .leftJoin('gen_user_roles', 'gen_users.id', 'gen_user_roles.gen_user_id')
      .leftJoin('user_roles', 'user_roles.id', 'gen_user_roles.user_role_id')
      .leftJoin('persons', 'persons.id', 'gen_users.person_id')
      .select(
        'gen_users.*',
        'persons.*',
        'gen_users.user_role_id',
        'user_roles.role_name'
      )
      .where('gen_users.status_id', 1);
  }

  // Update an existing admin user
  static async update(userId: string, user: GenUser & Persons): Promise<any> {
    if (user.username || user.password) {
      await db('gen_users')
        .where('id', userId)
        .update({
          username: user.username,
          password: user.password
        });
    }

    if (user.user_role_id) {
      await db('gen_user_roles')
        .where('gen_user_id', userId)
        .update({ user_role_id: user.user_role_id });
    }

    return { message: 'User updated', user };
  }

  // Delete an admin user
  static async delete(userId: string): Promise<any> {
    await db('gen_user_roles').where('gen_user_id', userId).update({ is_deleted: 1 });
    await db('gen_users').where('id', userId).update({ is_deleted: 1 });
    return { message: 'User deleted', userId };
  }
}