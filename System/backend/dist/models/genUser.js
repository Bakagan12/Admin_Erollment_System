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
exports.GenUser = void 0;
const db_1 = __importDefault(require("../config/db"));
class GenUser {
    constructor(id, username, gen_user_email, password, person_id, guardian_id, user_role_id, change_pass_code, status_id, is_emailed, is_deleted, is_deleted_by) {
        this.id = id;
        this.username = username;
        this.gen_user_email = gen_user_email;
        this.password = password;
        this.person_id = person_id;
        this.guardian_id = guardian_id;
        this.user_role_id = user_role_id;
        this.status_id = status_id;
        this.change_pass_code = change_pass_code;
        this.is_emailed = is_emailed;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const row = yield (0, db_1.default)('gen_users')
                .where({ gen_user_email: email, is_deleted: 0, status_id: 1 })
                .first();
            if (!row)
                return null;
            return new GenUser(row.id, row.username, row.gen_user_email, row.password, row.person_id, row.guardian_id, row.user_role_id, row.status_id, row.change_pass_code, row.is_emailed, row.is_deleted, row.is_deleted_by);
        });
    }
}
exports.GenUser = GenUser;
