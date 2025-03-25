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
exports.selectRoles = void 0;
const db_1 = __importDefault(require("../../../config/db"));
class selectRoles {
    // Get all active roles
    static getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('user_roles').select('role_name', 'is_active').where('is_active', '=', 1);
        });
    }
    // Create a new role
    static createRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('user_roles')
                .insert({ role_name: role.role_name, is_active: role.is_active });
        });
    }
    // Update an existing role by id
    static updateRole(user, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('user_roles')
                .where({ id: userID })
                .update({ role_name: user.role_name, is_active: user.is_active, is_deleted: 0 });
        });
    }
    // Delete a role by id
    // This is your updated `deleteRole` method:
    static deleteRole(roleID, roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { is_deleted_by } = roleData;
            return (0, db_1.default)('user_roles')
                .where({ id: roleID })
                .update({
                is_deleted: 1,
                is_deleted_by: is_deleted_by,
            });
        });
    }
}
exports.selectRoles = selectRoles;
