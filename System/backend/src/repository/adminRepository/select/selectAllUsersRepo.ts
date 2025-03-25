import db from "../../../config/db";
const bcrypt = require('bcryptjs');

export class UserService {
  
    // Fetch all users (as you already have)
    static async getAllUsers() {
        return db('gen_users')
            .leftJoin('status', 'gen_users.status_id', 'status.id')
            .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
            .leftJoin('persons', 'gen_users.person_id', 'persons.id')
            .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
            .where('user_roles.is_active', '=', 1)
            .where(function() {
                this.where('gen_users.is_deleted', '=', 0)
                    .orWhereNull('gen_users.is_deleted');
            })
            .select(
                'gen_users.id as user_id',
                'gen_users.username',
                'gen_users.password',
                'persons.first_name',
                'persons.middle_name',
                'persons.last_name',
                'persons.email',
                'user_roles.role_name',
                'status.status_name',
                'gen_users.created_at',
                'gen_users.is_deleted_by',
                'status.status_name'
            );
    }

    // Create a new user
    static async createUser(userData: any) {
        const { first_name, middle_name, last_name, suffix_id, date_of_birth, gender, address, contact_no, emergency_contact_name, emergency_contact_no, password, gen_user_email, user_role_id, status_id } = userData;
        try {
            // Insert into persons table
            const person = await db('persons').insert({
                first_name,
                middle_name,
                last_name,
                suffix_id,
                date_of_birth,
                gender,
                address,
                contact_no,
                emergency_contact_name,
                emergency_contact_no,
                email: gen_user_email,
            });
            const personId = person[0];
    
            // Hash the password before inserting
            const hashedPassword = await bcrypt.hash(password, 10);
    
            // Insert into gen_users table
            const newUser = await db('gen_users').insert({
                username: `${first_name}.${last_name}`, // Assuming username is a combination of first and last name
                gen_user_email,
                password: hashedPassword, // Save the hashed password
                person_id: personId,
                user_role_id,
                status_id,
                created_at: new Date()
            });
    
            return newUser;
        } catch (error) {
            console.error("Error creating user:", error);
            throw new Error('Error creating user');
        }
    }

    // Update an existing user
    static async updateUser(userId: number, userData: any) {
        const { username, gen_user_email, password, first_name, middle_name, last_name, suffix_id, date_of_birth, gender, address, contact_no, emergency_contact_name, emergency_contact_no, user_role_id, status_id } = userData;
    
        try {
            // First, update the person's information if there are changes
            const updatedPerson = await db('persons')
                .where('id', '=', userData.person_id) // assuming userData contains the person's ID
                .update({
                    first_name,
                    middle_name,
                    last_name,
                    suffix_id,
                    date_of_birth,
                    gender,
                    address,
                    contact_no,
                    emergency_contact_name,
                    emergency_contact_no,
                });
    
            // If password is provided, hash it, otherwise keep the existing password
            let updatedPassword = password;
            if (password) {
                updatedPassword = await bcrypt.hash(password, 10);
            }
    
            // Update the user record
            const updatedUser = await db('gen_users')
                .where('id', '=', userId)
                .update({
                    gen_user_email,
                    username,
                    password: updatedPassword, // Update only if password is provided
                    person_id: userData.person_id, // person_id should come from userData
                    user_role_id,
                    status_id,
                    updated_at: new Date()
                });
    
            return updatedUser;
        } catch (error) {
            console.error("Error updating user:", error);
            throw new Error('Error updating user');
        }
    }


    // Delete a user (soft delete by setting is_deleted)
    static async deleteUser(userId: number, deletedBy: number) {
        // Soft delete the user by setting `is_deleted` and `is_deleted_by`
        const deletedUser = await db('gen_users')
            .where('id', '=', userId)
            .update({
                is_deleted: 1,
                is_deleted_by: deletedBy
            });

        return deletedUser;
    }
}
