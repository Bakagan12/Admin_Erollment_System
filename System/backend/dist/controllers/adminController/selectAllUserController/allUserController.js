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
const selectAllUsersRepo_1 = require("../../../repository/adminRepository/select/selectAllUsersRepo");
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
        res.status(201).json({
            message: 'User created successfully',
            user: newUser // Include the created user details
        });
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
        // Send back the updated user data
        if (updatedUser) {
            const fetchedUser = yield selectAllUsersRepo_1.UserService.getAllUsers(); // Assuming you'll fetch all users and return
            const updatedUserDetails = fetchedUser.find(user => user.user_id === Number(userId));
            res.status(200).json({
                message: "User updated successfully!",
                data: updatedUserDetails
            });
        }
        else {
            res.status(404).json({ message: "User not found!" });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating user: ' + err.message });
    }
});
exports.updateUserController = updateUserController;
// Controller to soft delete a user
// Controller to soft delete a user
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { deletedBy } = req.body;
        // Fetch the user details before deletion
        const fetchedUser = yield selectAllUsersRepo_1.UserService.getAllUsers();
        const userToDelete = fetchedUser.find(user => user.user_id === Number(userId));
        if (!userToDelete) {
            return res.status(404).json({ message: "User not found!" });
        }
        // Perform the soft delete
        const deletedUser = yield (0, selectAllUserService_1.deleteUser)(Number(userId), deletedBy);
        if (deletedUser) {
            res.status(200).json({
                message: "User deleted successfully!",
                data: userToDelete // Send back the user data that was deleted
            });
        }
        else {
            res.status(500).json({ message: "Error deleting user!" });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting user: ' + err.message });
    }
});
exports.deleteUserController = deleteUserController;
