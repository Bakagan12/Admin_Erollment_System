"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_1 = __importDefault(require("../../../config/db"));
const bcrypt = require('bcryptjs');
class UserService {
    // Fetch all users (as you already have)
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users')
                .leftJoin('status', 'gen_users.status_id', 'status.id')
                .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
                .leftJoin('persons', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                .where('user_roles.is_active', '=', 1)
                .where(function () {
                this.where('gen_users.is_deleted', '=', 0)
                    .orWhereNull('gen_users.is_deleted');
            })
                .select('gen_users.id as user_id', 'gen_users.username', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'persons.email', 'user_roles.role_name', 'status.status_name', 'gen_users.created_at', 'gen_users.is_deleted_by', 'status.status_name');
        });
    }
    // Create a new user
    static createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_name, middle_name, last_name, suffix_id, date_of_birth, gender, address, contact_no, emergency_contact_name, emergency_contact_no, password, gen_user_email, user_role_id, status_id } = userData;
            try {
                // Insert into persons table
                const person = yield (0, db_1.default)('persons').insert({
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
                const hashedPassword = yield bcrypt.hash(password, 10);
                // Insert into gen_users table
                const newUser = yield (0, db_1.default)('gen_users').insert({
                    username: `${first_name}.${last_name}`, // Assuming username is a combination of first and last name
                    gen_user_email,
                    password: hashedPassword, // Save the hashed password
                    person_id: personId,
                    user_role_id,
                    status_id,
                    created_at: new Date()
                });
                return newUser;
            }
            catch (error) {
                console.error("Error creating user:", error);
                throw new Error('Error creating user');
            }
        });
    }
    // Update an existing user
    static updateUser(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, gen_user_email, password, first_name, middle_name, last_name, suffix_id, date_of_birth, gender, address, contact_no, emergency_contact_name, emergency_contact_no, user_role_id, status_id } = userData;
            try {
                // First, update the person's information if there are changes
                const updatedPerson = yield (0, db_1.default)('persons')
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
                    updatedPassword = yield bcrypt.hash(password, 10);
                }
                // Update the user record
                const updatedUser = yield (0, db_1.default)('gen_users')
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
            }
            catch (error) {
                console.error("Error updating user:", error);
                throw new Error('Error updating user');
            }
        });
    }
    // Delete a user (soft delete by setting is_deleted)
    static deleteUser(userId, deletedBy) {
        return __awaiter(this, void 0, void 0, function* () {
            // Soft delete the user by setting `is_deleted` and `is_deleted_by`
            const deletedUser = yield (0, db_1.default)('gen_users')
                .where('id', '=', userId)
                .update({
                is_deleted: 1,
                is_deleted_by: deletedBy
            });
            return deletedUser;
        });
    }
}
exports.UserService = UserService;
