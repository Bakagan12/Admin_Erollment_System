import { Router } from "express";
import { RoleController } from "../../controllers/adminController/user_and_role/role/roleController";
import * as selectUsers from '../../controllers/adminController/selectUserController/selectUserController'
import { fetchAllAnnouncements, fetchAnnouncementById, createNewAnnouncement, updateExistingAnnouncement, deleteExistingAnnouncement } from '../../controllers/announcementController/announcementController';
import * as allUser from '../../controllers/adminController/allUserController/allUserController';
import { UserOnAdminController } from "../../controllers/adminController/user_and_role/user/userController";
import { ReportsController } from "../../controllers/adminController/reports/reportsController";
import { StudentAdminController } from "../../controllers/adminController/dashboard/getallStudentsOnAdminController";
const router = Router();

//announcement
router.get('/get_announcement', fetchAllAnnouncements);
router.get('/selected/:id', fetchAnnouncementById);
router.post('/create', createNewAnnouncement);
router.put('/update', updateExistingAnnouncement);
router.delete('/delete/:id', deleteExistingAnnouncement);

//fetch departmental users
router.get('/get_all/users', allUser.getAllUser);
router.get('/select/all_students',selectUsers.fetchAllStudents );

router.get('/select/all_students/from_registrar',selectUsers.fetchAllStudentsFromRegistrar );
router.get('/select/all_students/from_cashier',selectUsers.fetchAllStudentsFromCashier );
router.get('/select/all_students/from_guidance',selectUsers.fetchAllStudentsFromGuidance );

router.patch('/select/all_students/from_guidance_pass',selectUsers.passStudentsFromGuidance );
router.patch('/from_cashier/approved',selectUsers.StudentsApprovefromCashierController );
router.patch('/from_guidance/approved',selectUsers.StudentsApprovefromGuidanceController );
router.patch('/from_registrar/approved',selectUsers.StudentsApprovefromRegistrarController );
router.patch('/from_registrar/approved_enrolled',selectUsers.StudentsApprovefromRegistrarEnrolledController );

router.get('/select/all_teachers',selectUsers.fetchAllTeachers );
//Create
router.post('/departmental/user',allUser.registerDepartmentalUser );
router.post('/student/user',allUser.registerStudentUser );

// User and Roles page
//Role
router.post("/roles/list", RoleController.getRoleList);
router.post("/roles/create", RoleController.createRole);
router.put("/roles/update/:id", RoleController.updateRole);
router.delete("/roles/delete/:id", RoleController.deleteRole);

//users
router.get('/user/by_user_id', UserOnAdminController.getByUserOnAdminPage);
router.get('/user/by_user_id/:roleId', UserOnAdminController.getByRoleOnAdminPage);
router.get('/user/getAllUsersOnAdminPage', UserOnAdminController.getAllUsersOnAdminPage);
router.post('/user/create', UserOnAdminController.create);
router.put('/user/:id', UserOnAdminController.update);
router.delete('/user/:id', UserOnAdminController.delete);

//Reports
router.get('/reports', ReportsController.getReports);


router.get("/students", StudentAdminController.getAllStudents);
router.get("/teachers", StudentAdminController.getAllTeachers);
router.get("/students/enrolled", StudentAdminController.getEnrolledStudents);

export default router;
