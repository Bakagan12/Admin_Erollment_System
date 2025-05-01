import { Request, Response } from "express";
import { ClinicLogsService } from "../../../../services/departmental_userService/clinic/incident_logs/clinic_logs_service";
import { ClinicLogs } from "../../../../models/clinic_logs";


export class ClinicLogsController {
  static async create(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await ClinicLogsService.create(id, data);
      if (result) {
        res.status(201).json({ success: true, data: result });
      } else {
        res.status(400).json({ success: false, message: "Insert failed" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const logs = await ClinicLogsService.getAll();
      res.status(200).json({ success: true, data: logs });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }

  

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const updatedLog = await ClinicLogsService.update(Number(id), updateData);
      if (updatedLog) {
        res.status(200).json({ success: true, data: updatedLog });
      } else {
        res.status(400).json({ success: false, message: "Update failed" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const success = await ClinicLogsService.delete(Number(id));
      if (success) {
        res.status(200).json({ success: true, message: "Log deleted" });
      } else {
        res.status(400).json({ success: false, message: "Delete failed" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }
  static async find(req: Request, res: Response) {
    const criteria = req.query;
    try {
      const logs = await ClinicLogsService.find(criteria as Partial<ClinicLogs>);
      if (logs.length > 0) {
        res.status(200).json({ success: true, data: logs });
      } else {
        res.status(404).json({ success: false, message: "No logs found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }
  
}
