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
exports.deleteRoleController = exports.updateRoleController = exports.createRoleController = exports.selectAllRolesController = void 0;
const selectAllRolesService_1 = require("../../../services/adminService/select/selectAllRolesService");
// Get all active roles
const selectAllRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, selectAllRolesService_1.getRoles)();
        res.status(200).json(roles);
    }
    catch (error) {
        console.error('Error fetching roles:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching roles',
            error: error.message || 'Unknown error',
        });
    }
});
exports.selectAllRolesController = selectAllRolesController;
// Create a new role
const createRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body; // Assuming the new role data is in the request body
        const roleId = yield (0, selectAllRolesService_1.createRole)(user);
        res.status(201).json({
            success: true,
            message: 'Role created successfully',
            data: { roleId },
        });
    }
    catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating role',
            error: error.message || 'Unknown error',
        });
    }
});
exports.createRoleController = createRoleController;
// Update an existing role
const updateRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleID = req.params;
        const role = req.body; // The updated role data from the request body
        const updatedCount = yield (0, selectAllRolesService_1.updateRole)(role, roleID);
        if (updatedCount === 0) {
            res.status(404).json({
                success: false,
                message: 'Role not found or no changes made',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Role updated successfully',
        });
    }
    catch (error) {
        console.error('Error updating role:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating role',
            error: error.message || 'Unknown error',
        });
    }
});
exports.updateRoleController = updateRoleController;
// Delete a role by ID
const deleteRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roleID } = req.params;
        const { roleData } = req.body;
        const result = yield (0, selectAllRolesService_1.deleteRole)(Number(roleID), roleData);
        res.status(201).json({
            success: true,
            message: 'Role deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user: ' + error.message });
    }
});
exports.deleteRoleController = deleteRoleController;
