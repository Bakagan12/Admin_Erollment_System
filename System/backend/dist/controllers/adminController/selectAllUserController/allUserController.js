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
exports.fetchAllUsers = void 0;
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
