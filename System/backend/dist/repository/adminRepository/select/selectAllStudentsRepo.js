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
exports.selectAllStudents = void 0;
const db_1 = __importDefault(require("../../../config/db"));
class selectAllStudents {
    static getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('students').leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('mother', 'students.mother_id', 'mother.id')
                .leftJoin('father', 'students.father_id', 'father.id')
                .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                .where('students.status_id', 1)
                .select('students.id as student_id', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'persons.email', 'persons.contact_no');
        });
    }
}
exports.selectAllStudents = selectAllStudents;
