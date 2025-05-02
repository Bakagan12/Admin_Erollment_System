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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentStatus = void 0;
const db_1 = __importDefault(require("../config/db"));
class EnrollmentStatus {
    constructor(id, name, is_deleted) {
        this.id = id;
        this.name = name;
        this.is_deleted = is_deleted;
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, db_1.default)('enrollment_status').select('*');
            return results.map(row => new EnrollmentStatus(row.id, row.name, row.is_deleted));
        });
    }
}
exports.EnrollmentStatus = EnrollmentStatus;
