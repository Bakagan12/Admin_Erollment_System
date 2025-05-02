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
exports.GradeLevel = void 0;
const db_1 = __importDefault(require("../config/db"));
class GradeLevel {
    constructor(id, level_name, term_id, is_current, is_active, is_deleted, created_by, updated_by) {
        this.id = id;
        this.level_name = level_name;
        this.term_id = term_id;
        this.is_current = is_current;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, db_1.default)('grade_level').select('*');
            return results.map(row => new GradeLevel(row.id, row.level_name, row.term_id, row.is_active, row.is_current, row.is_deleted, row.created_by, row.updated_by));
        });
    }
}
exports.GradeLevel = GradeLevel;
