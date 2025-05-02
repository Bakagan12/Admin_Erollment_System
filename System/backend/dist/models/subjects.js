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
exports.Subjects = void 0;
const db_1 = __importDefault(require("../config/db"));
class Subjects {
    constructor(id, subject_name, grade_level_id, term_id, is_current, is_deleted, is_deleted_by, created_by, updated_by) {
        this.id = id;
        this.subject_name = subject_name;
        this.grade_level_id = grade_level_id;
        this.term_id = term_id;
        this.is_current = is_current;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, db_1.default)('subjects')
                .where({ is_current: 1 })
                .where({ is_deleted: 0 })
                .select('*');
            return results.map(row => new Subjects(row.id, row.subject_name, row.grade_level_id, row.term_id, row.is_current, row.is_deleted, row.is_deleted_by, row.created_by, row.updated_by));
        });
    }
}
exports.Subjects = Subjects;
