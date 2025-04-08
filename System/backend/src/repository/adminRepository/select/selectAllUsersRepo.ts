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
            .where('gen_users.is_deleted', '=', 0)
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
    // Create a new user
static async createUser(userData: any) {
    const {
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
        password,
        gen_user_email,
        user_role_id,
        status_id,
        is_deleted
     } = userData;

    try {
        // Start a transaction
        return await db.transaction(async (trx) => {
            // Generate the initial username based on first_name and last_name
            let username = `${first_name}.${last_name}`.toLowerCase();

            // Check if the username already exists in the database
            let existingUser = await trx('gen_users').where({ username }).first();

            // Check if the email already exists in the database
            let existingEmail = await trx('gen_users').where({ gen_user_email }).first();

            // If the username or email exists, throw an error and abort
            if (existingUser) {
                throw new Error(`Username "${username}" already exists. Please choose a different one.`);
            }
            if (existingEmail) {
                throw new Error(`Email "${gen_user_email}" already exists. Please use a different email.`);
            }

            // If the username exists, append a number or make a unique username
            let counter = 1;
            while (existingUser) {
                username = `${first_name}.${last_name}${counter}`.toLowerCase(); // Append a counter
                existingUser = await trx('gen_users').where({ username }).first();
                counter++;
            }

            // Insert into persons table
            const [personId] = await trx('persons').insert({
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
            });  // Return the new person ID

            // Hash the password before inserting
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert into gen_users table with the unique username
            const [newUserId] = await trx('gen_users').insert({
                username, // Use the generated unique username
                gen_user_email,
                password: hashedPassword, // Save the hashed password
                person_id: personId,
                user_role_id,
                status_id,
                is_deleted,
                created_at: new Date()
            }); // Optionally return the inserted user id

            // Return the newly created user's details (without password)
            return {
                id: newUserId,
                username,
                gen_user_email,
                first_name,
                middle_name,
                last_name,
                date_of_birth,
                gender,
                address,
                contact_no,
                user_role_id,
                status_id,
                is_deleted,
                created_at: new Date()
            };
        });
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
}




    // Update an existing user
    static async updateUser(userId: number, userData: any) {
        const {username, gen_user_email, password, first_name, middle_name, last_name, suffix_id, date_of_birth, gender, address, contact_no, emergency_contact_name, emergency_contact_no, user_role_id, status_id } = userData;

        try {
            // First, update the person's information if there are changes
            const updatedPerson = await db('persons')
                .where('id', '=', userData.id) // assuming userData contains the person's ID
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
