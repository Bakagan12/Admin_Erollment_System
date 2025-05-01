import { Request, Response } from 'express';
import { OnlineApplyPendingService } from '../../../services/departmental_userService/registrar/online_apply_pendingService';

export class OnlineApplyPendingController {
  static async getPending(req: Request, res: Response): Promise<void> {
    try {
      const filters = {
        grade_level_id: req.query.grade_level_id ? Number(req.query.grade_level_id) : undefined,
        classification_id: req.query.classification_id ? Number(req.query.classification_id) : undefined
      };

      const result = await OnlineApplyPendingService.getPendingStudents(filters);

      if (!result) {
        console.error('No Pending Students found');
      }

      res.status(200).json({
        message: 'Pending students retrieved successfully',
        data: result
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        message: 'Failed in Controller to retrieve pending students'
      });
    }
  }

   static async getEnrolled(req: Request, res: Response): Promise<void> {
    try {
      const result = await OnlineApplyPendingService.getEnrolledStudents();
      res.status(200).json({
        message: 'Enrolled students retrieved successfully',
        data: result
      });
    } catch (error) {
      console.error('Controller error:', error);
      res.status(500).json({
        message: 'Failed to retrieve enrolled students'
      });
    }
  }
}
