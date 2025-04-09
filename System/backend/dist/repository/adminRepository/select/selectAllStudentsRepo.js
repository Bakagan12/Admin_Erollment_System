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
    // Get all active students
    static getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users')
                .leftJoin('status', 'gen_users.status_id', 'status.id')
                .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
                .leftJoin('persons', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                .where('user_roles.is_active', '=', 1)
                .where('user_role_id', '=', 12)
                .where('gen_users.is_deleted', '=', 0)
                .where(function () {
                this.where('gen_users.is_deleted', '=', 0)
                    .orWhereNull('gen_users.is_deleted');
            })
                .select('gen_users.id as user_id', 'gen_users.username', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'gen_users.gen_user_email', 'user_roles.role_name', 'status.status_name', 'gen_users.created_at', 'gen_users.is_deleted_by', 'status.status_name');
        });
    }
    // Create a new student
    static createStudent(person, student) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Insert into 'persons' table first
                const [personId] = yield (0, db_1.default)('persons').insert(person).returning('id');
                // Then insert into 'students' table
                const [studentId] = yield (0, db_1.default)('students').insert({
                    person_id: personId,
                    mother_id: student.mother_id,
                    father_id: student.father_id,
                    student_guardian_id: student.student_guardian_id,
                    status_id: student.status_id
                });
                return studentId;
            }
            catch (error) {
                throw new Error('Error creating student: ' + error.message);
            }
        });
    }
    // Update an existing student
    static updateStudent(studentId, person, student) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update 'persons' table
                yield (0, db_1.default)('persons').where('id', student.person_id).update(person);
                // Update 'students' table
                yield (0, db_1.default)('students').where('id', studentId).update({
                    mother_id: student.mother_id,
                    father_id: student.father_id,
                    student_guardian_id: student.student_guardian_id,
                    status_id: student.status_id
                });
                return studentId;
            }
            catch (error) {
                throw new Error('Error updating student: ' + error.message);
            }
        });
    }
    // Delete a student (soft delete by changing status_id)
    static deleteStudent(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, db_1.default)('students').where('id', studentId).update({
                    status_id: 0
                });
                return studentId;
            }
            catch (error) {
                throw new Error('Error deleting student: ' + error.message);
            }
        });
    }
}
exports.selectAllStudents = selectAllStudents;
