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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const selectAllUsersRepo_1 = require("../../../repository/adminRepository/select/selectAllUsersRepo");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield selectAllUsersRepo_1.UserService.getAllUsers();
        return users;
    }
    catch (err) {
        throw new Error('Error fetching users: ' + err.message);
    }
});
exports.getAllUsers = getAllUsers;
// Create a new user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield selectAllUsersRepo_1.UserService.createUser(userData);
        return newUser;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.createUser = createUser;
// Update an existing user
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield selectAllUsersRepo_1.UserService.updateUser(userId, userData);
        return updatedUser;
    }
    catch (err) {
        console.error('Service error in updateUser:', err);
        throw new Error('Error updating user: ' + err.message);
    }
});
exports.updateUser = updateUser;
// Soft delete a user
const deleteUser = (userId, deletedBy) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield selectAllUsersRepo_1.UserService.deleteUser(userId, deletedBy);
        return deletedUser;
    }
    catch (err) {
        throw new Error('Error deleting user: ' + err.message);
    }
});
exports.deleteUser = deleteUser;
