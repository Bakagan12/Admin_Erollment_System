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
exports.selectUsers = void 0;
const db_1 = __importDefault(require("../../../config/db"));
class selectUsers {
    static getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('students').leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .select('gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'suffix.suffix_name').where('gen_users.user_role_id', '=', 12);
        });
    }
    static getAllTeachers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users').leftJoin('persons', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .select('gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'suffix.suffix_name').where('gen_users.user_role_id', '=', 13);
        });
    }
    static getAllStudentsfromRegistrar() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select('enrollment.id as enrollment_id', 'enrollment.*', 'persons.*', 'students.*', 'gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'suffix.suffix_name', 'grade_level.level_name', 'sections.section_name').where('gen_users.user_role_id', '=', 12)
                // .where('enrollment.is_confirmed_guidance', 0)
                // .where('enrollment.is_confirmed_registrar', 0)
                .where('enrollment.is_enrolled', 0);
        });
    }
    static getAllStudentsfromCashier() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select('enrollment.id as enrollment_id', 'persons.*', 'students.*', 'gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'suffix.suffix_name', 'grade_level.level_name', 'sections.section_name').where('gen_users.user_role_id', '=', 12)
                .where('enrollment.is_confirmed_cashier', 0);
        });
    }
    static getAllStudentsfromGuidance() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select('enrollment.id as enrollment_id', 'enrollment.is_enrolled', 'enrollment.is_passed', 'persons.*', 'students.*', 'gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'suffix.suffix_name', 'grade_level.level_name', 'sections.section_name').where('gen_users.user_role_id', '=', 12)
                .where('enrollment.is_confirmed_cashier', 1)
                .where('enrollment.is_confirmed_registrar', 0)
                .where('enrollment.is_confirmed_guidance', 0);
        });
    }
    static PassStudentsFromGuidanceRepo(enrollment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .where({ id: enrollment_id })
                .update({ is_passed: 1 });
        });
    }
    static StudentsApprovefromCashierRepo(enrollment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .where({ id: enrollment_id })
                .update({ is_confirmed_cashier: 1 });
        });
    }
    static StudentsApprovefromGuidanceRepo(enrollment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .where({ id: enrollment_id })
                .update({ is_confirmed_guidance: 1 });
        });
    }
    static StudentsApprovefromRegistrarRepo(enrollment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .where({ id: enrollment_id })
                .update({ is_confirmed_registrar: 1 });
        });
    }
    static StudentsApprovefromRegistrarEnrolledRepo(enrollment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('enrollment')
                .where({ id: enrollment_id })
                .update({ is_enrolled: 1 });
        });
    }
}
exports.selectUsers = selectUsers;
