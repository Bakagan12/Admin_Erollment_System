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
exports.authRepository = void 0;
const db_1 = __importDefault(require("../../config/db"));
class authRepository {
    static find(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users as u')
                .join('persons as p', 'u.person_id', 'p.id')
                .join('user_roles as r', 'u.user_role_id', 'r.id')
                .leftJoin('suffix', 'suffix.id', 'p.suffix_id')
                .whereRaw('LOWER(u.username) = ?', [username.toLowerCase()])
                .where('u.is_deleted', 0)
                // .where('r.is_active', 1)
                .select('u.*', 'p.first_name', 'p.last_name', 'p.middle_name', 'p.age', 'p.date_of_birth', 'p.place_of_birth', 'p.gender', 'p.citizenship', 'p.email as person_email', 'p.contact_no', 'r.role_name', 'r.is_active as role_is_active');
        });
    }
    static save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users').insert({
                person_id: user.person_id,
                guardian_id: user.guardian_id,
                username: user.username,
                password: user.password,
                user_role_id: user.user_role_id,
                change_pass_code: user.change_pass_code,
                status_id: user.status_id,
                gen_user_email: user.gen_user_email,
                is_emailed: user.is_emailed,
                is_deleted: user.is_deleted,
                is_deleted_by: user.is_deleted_by
            });
        });
    }
}
exports.authRepository = authRepository;
