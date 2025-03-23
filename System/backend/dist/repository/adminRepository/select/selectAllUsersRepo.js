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
exports.selectAllUsers = void 0;
const db_1 = __importDefault(require("../../../config/db"));
class selectAllUsers {
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users').leftJoin('status', 'gen_users.status_id', 'status.id')
                .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
                .leftJoin('persons', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                // .where('gen_users.status_id', '=', 1)
                // .where('gen_users.is_deleted', '!=', 1)
                .where('user_roles.is_active', '=', 1)
                .select('gen_users.id as user_id', 'gen_users.username', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'persons.email', 'user_roles.role_name', 'status.status_name', 'gen_users.created_at', 'gen_users.is_deleted_by', 'status.status_name');
        });
    }
}
exports.selectAllUsers = selectAllUsers;
