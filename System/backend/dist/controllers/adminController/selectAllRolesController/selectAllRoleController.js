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
exports.selectAllRolesController = void 0;
const selectAllRolesService_1 = require("../../../services/adminService/select/selectAllRolesService");
const selectAllRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, selectAllRolesService_1.getRoles)();
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching roles' });
    }
});
exports.selectAllRolesController = selectAllRolesController;
