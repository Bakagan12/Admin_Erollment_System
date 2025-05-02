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
exports.Section = void 0;
const db_1 = __importDefault(require("../config/db"));
class Section {
    constructor(section_name, grade_level_id, term_id, is_active, is_current, is_deleted, created_by, updated_by) {
        this.section_name = section_name;
        this.grade_level_id = grade_level_id;
        this.term_id = term_id;
        this.is_active = is_active;
        this.is_current = is_current;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, db_1.default)('sections')
                .leftJoin('grade_level', 'grade_level.id', 'sections.grade_level_id')
                .select('sections.*', 'grade_level.level_name');
            return results;
        });
    }
}
exports.Section = Section;
