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
exports.fetchAllStudents = void 0;
const selectAllStudentsService_1 = require("../../../services/adminService/select/selectAllStudentsService");
const fetchAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the service to fetch students
        const students = yield (0, selectAllStudentsService_1.getAllStudents)();
        res.status(200).json(students);
    }
    catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
});
exports.fetchAllStudents = fetchAllStudents;
