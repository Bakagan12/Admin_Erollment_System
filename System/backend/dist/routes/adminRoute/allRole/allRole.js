"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const selectAllRoleController_1 = require("../../../controllers/adminController/selectAllRolesController/selectAllRoleController");
const router = (0, express_1.Router)();
router.get('/allRoles', selectAllRoleController_1.selectAllRolesController);
exports.default = router;
