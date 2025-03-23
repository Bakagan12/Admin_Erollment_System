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
            return (0, db_1.default)('students').leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('mother', 'students.mother_id', 'mother.id')
                .leftJoin('father', 'students.father_id', 'father.id')
                .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                .where('students.status_id', 1)
                .select('students.id as student_id', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'persons.email', 'persons.contact_no');
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
