import { Term } from "../../models/term";
import { PaymentMethod } from "../../models/paymentMethod";
import { Classification } from "../../models/classification";
import { EnrollmentStatus } from "../../models/enrollmentStatus";
import { GradeLevel } from "../../models/gradeLevel";
import { Section } from "../../models/sections";
import { Status } from "../../models/status";
import { StudentStatus } from "../../models/studentStatus";
import { Subjects } from "../../models/subjects";
import { Suffix } from "../../models/suffix";
import { UserRoles } from "../../models/userRoles";
import { SemesterLevel } from "../../models/semester_level";


export class RetrieveModels{
    static async getAllTerms(){
        return await Term.getAll();
    }

    static async getAllPaymentMethod(){
        return await PaymentMethod.getAll();
    }
    static async getAllClassification(){
        return await Classification.getAll();
    }
    static async getAllEnrollmentStatus(){
        return await EnrollmentStatus.getAll();
    }
    static async getAllGradeLevel(){
        return await GradeLevel.getAll();
    }
    static async getAllSection(){
        return await Section.getAll();
    }
    static async getAllStatus(){
        return await Status.getAll();
    }
    static async getAllStudentStatus(){
        return await StudentStatus.getAll();
    }
    static async getAllSubject(){
        return await Subjects.getAll();
    }
    static async getAllSuffix(){
        return await Suffix.getAll();
    }
    static async getAllUserRoles(){
        return await UserRoles.getAll();
    }
    static async getAllSemesterLevel(){
        return await SemesterLevel.getAll();
    }
}