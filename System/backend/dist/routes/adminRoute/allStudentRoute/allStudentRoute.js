"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const allStudentController_1 = require("../../../controllers/adminController/selectAllStudentController/allStudentController");
const router = (0, express_1.Router)();
router.get('/get_all_students', allStudentController_1.fetchAllStudents);
exports.default = router;
