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
exports.EmailRepo = void 0;
const db_1 = __importDefault(require("../../config/db"));
class EmailRepo {
    // Find user by username
    static find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, db_1.default)('gen_users').where({ gen_user_email: email }).select('username', 'gen_user_email', 'password', 'change_pass_code').first();
                return user;
            }
            catch (error) {
                throw new Error('Error querying the database');
            }
        });
    }
    static updatePassword(email, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield (0, db_1.default)('gen_users')
                    .where({ gen_user_email: email })
                    .update({ password: newPassword });
                return updatedUser;
            }
            catch (error) {
                throw new Error('Error updating the password');
            }
        });
    }
    static updateChangePassCode(email, code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield (0, db_1.default)('gen_users')
                    .where({ gen_user_email: email })
                    .update({ change_pass_code: code });
                if (updated === 0) {
                    throw new Error('No user found with this email to update change_pass_code');
                }
                // Fetch the updated user manually
                const updatedUser = yield (0, db_1.default)('gen_users')
                    .where({ gen_user_email: email })
                    .first();
                return updatedUser;
            }
            catch (error) {
                throw new Error('Error updating change_pass_code');
            }
        });
    }
}
exports.EmailRepo = EmailRepo;
