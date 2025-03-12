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
exports.getRoles = void 0;
const selectRolesRepo_1 = require("../../../repository/adminRepository/select/selectRolesRepo");
const getRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield selectRolesRepo_1.selectRoles.getRoles();
        return roles;
    }
    catch (err) {
        throw new Error('Error fetching roles: ' + err.message);
    }
});
exports.getRoles = getRoles;
