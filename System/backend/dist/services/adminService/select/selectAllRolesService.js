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
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoles = void 0;
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
// Create a new role
const createRole = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleId = yield selectAllRolesRepo_1.selectRoles.createRole(user);
        return roleId; // Returning the inserted ID of the new role
    }
    catch (err) {
        throw new Error('Error creating role: ' + err.message);
    }
});
exports.createRole = createRole;
// Update an existing role
const updateRole = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCount = yield selectAllRolesRepo_1.selectRoles.updateRole(user);
        return updatedCount; // Return the count of updated rows
    }
    catch (err) {
        throw new Error('Error updating role: ' + err.message);
    }
});
exports.updateRole = updateRole;
// Delete a role by id
const deleteRole = (role) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield selectAllRolesRepo_1.selectRoles.deleteRole(role);
        return deletedCount; // Return the count of deleted rows
    }
    catch (err) {
        throw new Error('Error deleting role: ' + err.message);
    }
});
exports.deleteRole = deleteRole;
