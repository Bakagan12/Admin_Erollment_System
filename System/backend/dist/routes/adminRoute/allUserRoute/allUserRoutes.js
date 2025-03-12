"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const allUserController_1 = require("../../../controllers/adminController/selectAllUserController/allUserController");
const router = (0, express_1.Router)();
router.get('/get_all_user', allUserController_1.fetchAllUsers);
exports.default = router;
