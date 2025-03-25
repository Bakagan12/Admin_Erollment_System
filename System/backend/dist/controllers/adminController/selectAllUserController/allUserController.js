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
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.fetchAllUsers = void 0;
const selectAllUserService_1 = require("../../../services/adminService/select/selectAllUserService");
const fetchAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the service to fetch users
        const users = yield (0, selectAllUserService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (err) {
        console.error('Error fetching users:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching users',
            error: (err instanceof Error) ? err.message : err,
        });
    }
});
exports.fetchAllUsers = fetchAllUsers;
// Controller to create a new user
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield (0, selectAllUserService_1.createUser)(userData);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Error creating user: ' + err.message });
    }
});
exports.createUserController = createUserController;
// Controller to update an existing user
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const updatedUser = yield (0, selectAllUserService_1.updateUser)(Number(userId), userData);
        res.status(200).json(["User updated Successfully! "]);
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating user: ' + err.message });
    }
});
exports.updateUserController = updateUserController;
// Controller to soft delete a user
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { deletedBy } = req.body;
        const deletedUser = yield (0, selectAllUserService_1.deleteUser)(Number(userId), deletedBy);
        res.status(200).json("User deleted Successfully!");
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting user: ' + err.message });
    }
});
exports.deleteUserController = deleteUserController;
