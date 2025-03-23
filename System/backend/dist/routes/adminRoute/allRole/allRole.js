"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// In your roles route file
const express_1 = require("express");
const selectAllRoleController_1 = require("../../../controllers/adminController/selectAllRolesController/selectAllRoleController");
const router = (0, express_1.Router)();
router.get('/allRoles', selectAllRoleController_1.selectAllRolesController);
router.post('/role/create', selectAllRoleController_1.createRoleController);
router.put('/role/update', selectAllRoleController_1.updateRoleController);
router.post('/role/delete', selectAllRoleController_1.deleteRoleController);
exports.default = router;
