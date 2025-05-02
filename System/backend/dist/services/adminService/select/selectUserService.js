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
exports.StudentsApprovefromRegistrarEnrolledService = exports.StudentsApprovefromRegistrarService = exports.StudentsApprovefromGuidanceService = exports.StudentsApprovefromCashierService = exports.passStudentsFromGuidance = exports.getAllStudentsFromGuidance = exports.getAllStudentsFromCashier = exports.getAllStudentsFromRegistrar = exports.getAllTeachers = exports.getAllStudents = void 0;
const selectUserRepo_1 = require("../../../repository/adminRepository/select/selectUserRepo");
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.getAllStudents();
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.getAllStudents = getAllStudents;
const getAllTeachers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield selectUserRepo_1.selectUsers.getAllTeachers();
        return teachers;
    }
    catch (err) {
        throw new Error('Error fetching teachers: ' + err.message);
    }
});
exports.getAllTeachers = getAllTeachers;
const getAllStudentsFromRegistrar = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.getAllStudentsfromRegistrar();
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.getAllStudentsFromRegistrar = getAllStudentsFromRegistrar;
const getAllStudentsFromCashier = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.getAllStudentsfromCashier();
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.getAllStudentsFromCashier = getAllStudentsFromCashier;
const getAllStudentsFromGuidance = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.getAllStudentsfromGuidance();
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.getAllStudentsFromGuidance = getAllStudentsFromGuidance;
const passStudentsFromGuidance = (enrollment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.PassStudentsFromGuidanceRepo(enrollment_id);
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.passStudentsFromGuidance = passStudentsFromGuidance;
const StudentsApprovefromCashierService = (enrollment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.StudentsApprovefromCashierRepo(enrollment_id);
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.StudentsApprovefromCashierService = StudentsApprovefromCashierService;
const StudentsApprovefromGuidanceService = (enrollment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.StudentsApprovefromGuidanceRepo(enrollment_id);
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.StudentsApprovefromGuidanceService = StudentsApprovefromGuidanceService;
const StudentsApprovefromRegistrarService = (enrollment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.StudentsApprovefromRegistrarRepo(enrollment_id);
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.StudentsApprovefromRegistrarService = StudentsApprovefromRegistrarService;
const StudentsApprovefromRegistrarEnrolledService = (enrollment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield selectUserRepo_1.selectUsers.StudentsApprovefromRegistrarEnrolledRepo(enrollment_id);
        return students;
    }
    catch (err) {
        throw new Error('Error fetching students: ' + err.message);
    }
});
exports.StudentsApprovefromRegistrarEnrolledService = StudentsApprovefromRegistrarEnrolledService;
