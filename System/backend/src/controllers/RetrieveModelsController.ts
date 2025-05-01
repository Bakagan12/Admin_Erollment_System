// controllers/RetrieveModelsController.ts
import { Request, Response } from "express";
import { RetrieveModels } from "../services/RetrieveModelService/retrieveModel";

export class RetrieveModelsController {
    static async getAllTerms(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllTerms();
            res.status(200).json(data);
        } catch (err: unknown) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllPaymentMethods(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllPaymentMethod();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllClassifications(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllClassification();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllEnrollmentStatuses(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllEnrollmentStatus();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllGradeLevels(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllGradeLevel();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllSections(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllSection();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllStatuses(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllStatus();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllStudentStatuses(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllStudentStatus();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllSubjects(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllSubject();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllSuffixes(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllSuffix();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async getAllUserRoles(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllUserRoles();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }
     static async getAllSemesterLevel(req: Request, res: Response) {
        try {
            const data = await RetrieveModels.getAllSemesterLevel();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }
}
