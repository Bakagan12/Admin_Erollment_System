import { Request, Response } from 'express';
import { PaymentService } from '../../services/requestService/paymentService';
import { ErrorLog } from '../error/errorLog';
import { AppDataSource } from '../emailController/data-source';

export class PaymentController {
  private paymentService: PaymentService;

  constructor(secretKey: string) {
    this.paymentService = new PaymentService(secretKey);
  }

  async createPaymentIntent(req: Request, res: Response): Promise<void> {
    const { amount, currency } = req.body;
    try {
      const result = await this.paymentService.createPaymentIntent(amount, currency);
      res.status(201).json(result);
    } catch (error: any) {
      await this.saveErrorLog(error.response.data.errors[0]);
      res.status(400).json({ message: 'Error saving payment intent', error: error.response.data });
    }
  }

  async createPaymentMethod(req: Request, res: Response): Promise<void> {
    const paymentMethodData = req.body;
    try {
      const result = await this.paymentService.createPaymentMethod(paymentMethodData);
      res.status(201).json(result);
    } catch (error: any) {
      await this.saveErrorLog(error.response.data.errors[0]);
      res.status(400).json({ message: 'Error creating payment method', error: error.response.data });
    }
  }

  async attachToPaymentIntent(req: Request, res: Response): Promise<void> {
    const { paymentIntentId, paymentMethodId, returnUrl } = req.body;
    try {
      const result = await this.paymentService.attachToPaymentIntent(paymentIntentId, paymentMethodId, returnUrl);
      res.status(201).json(result);
    } catch (error: any) {
      await this.saveErrorLog(error.response.data.errors[0]);
      res.status(400).json({ message: 'Error attaching payment method to payment intent', error: error.response.data });
    }
  }

  private async saveErrorLog(error: any): Promise<void> {
    const errorLogRepository = AppDataSource.getRepository(ErrorLog);
    const errorLog = new ErrorLog();
    errorLog.code = error.code;
    await errorLogRepository.save(errorLog);
  }
}