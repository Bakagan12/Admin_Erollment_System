import { Request, Response } from 'express';
import { CreatePaymentService } from '../../services/requestService/createPaymentService';

export class CreatePaymentController {
  static async createPaymentIntent(req: Request, res: Response) {
    const { amount, currency } = req.body;
    try {
      const paymentIntent = await CreatePaymentService.createPaymentIntent(amount, currency);
      res.status(201).json(paymentIntent);
    } catch (error: any) {
      console.error("Error creating payment intent:", error.message);  // Log the error for debugging
      res.status(400).json({ message: error.message });
    }
  }


  static async createPaymentMethod(req: Request, res: Response) {
    const cardDetails = req.body;
    try {
      const paymentMethod = await CreatePaymentService.createPaymentMethod(cardDetails);
      res.status(201).json(paymentMethod);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async attachPaymentMethod(req: Request, res: Response) {
    const { paymentIntentId, paymentMethodId } = req.body;
    try {
      const result = await CreatePaymentService.attachPaymentMethod(paymentIntentId, paymentMethodId);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
