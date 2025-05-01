import { Request, Response } from 'express';
import { StudentEnrolledService } from '../services/enrolledStudent_Service';

export class StudentEnrolledController {
  static async getOnlineEnrolledStudents(req: Request, res: Response) {
    try {
      const result = await StudentEnrolledService.getOnlineEnrolledStudents();
      res.status(200).json(result);
    } catch (error) {
      console.error('Controller Error:', error);
      res.status(500).json({ message: 'Failed to retrieve enrolled students' });
    }
  }
}
