// routes/RetrieveModelsRoutes.ts
import express from "express";
import { RetrieveModelsController } from "../controllers/RetrieveModelsController";

const router = express.Router();

router.get("/terms", RetrieveModelsController.getAllTerms);
router.get("/payment-methods", RetrieveModelsController.getAllPaymentMethods);
router.get("/classifications", RetrieveModelsController.getAllClassifications);
router.get("/enrollment-statuses", RetrieveModelsController.getAllEnrollmentStatuses);
router.get("/grade-levels", RetrieveModelsController.getAllGradeLevels);
router.get("/sections", RetrieveModelsController.getAllSections);
router.get("/statuses", RetrieveModelsController.getAllStatuses);
router.get("/student-statuses", RetrieveModelsController.getAllStudentStatuses);
router.get("/subjects", RetrieveModelsController.getAllSubjects);
router.get("/suffixes", RetrieveModelsController.getAllSuffixes);
router.get("/user-roles", RetrieveModelsController.getAllUserRoles);
router.get("/semester-level", RetrieveModelsController.getAllSemesterLevel);


export default router;
