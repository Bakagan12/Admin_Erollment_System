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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoleById = exports.getRoles = void 0;
const selectAllRolesRepo_1 = require("../../../repository/adminRepository/select/selectAllRolesRepo");
// Get all active roles
const getRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield selectAllRolesRepo_1.selectRoles.getRoles();
        return roles;
    }
    catch (err) {
        throw new Error('Error fetching roles: ' + err.message);
    }
});
exports.getRoles = getRoles;
const getRoleById = (roleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield selectAllRolesRepo_1.selectRoles.getRoleById(roleId); // Fetch role by ID
        return role;
    }
    catch (err) {
        throw new Error('Error fetching role by ID: ' + err.message);
    }
});
exports.getRoleById = getRoleById;
// Create a new role
const createRole = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [roleId] = yield selectAllRolesRepo_1.selectRoles.createRole(user);
        return roleId;
    }
    catch (err) {
        throw new Error('Error creating role: ' + err.message);
    }
});
exports.createRole = createRole;
// Update an existing role
const updateRole = (user, roleID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCount = yield selectAllRolesRepo_1.selectRoles.updateRole(user, roleID);
        return updatedCount;
    }
    catch (err) {
        throw new Error('Error updating role: ' + err.message);
    }
});
exports.updateRole = updateRole;
// Delete a role by id
const deleteRole = (roleID, is_deleted_by) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield selectAllRolesRepo_1.selectRoles.deleteRole(roleID, is_deleted_by); // Pass roleID and roleData
        return deletedCount; // Return the count of deleted rows
    }
    catch (err) {
        throw new Error('Error deleting role: ' + err.message);
    }
});
exports.deleteRole = deleteRole;
