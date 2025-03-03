import { CreatePaymentRepository } from "../../repository/requestsRepo/createPayment";
export class CreatePaymentService {
  static async createPaymentIntent(amount: number, currency: string) {
    try {
      const body = { amount, currency };
      const paymentIntent = await CreatePaymentRepository.createPaymentIntent(body);
      return paymentIntent;
    } catch (error: any) {
      // Add more context to the error
      throw new Error(`Error creating payment intent: ${error.message || "Unknown error"}`);
    }
  }

  static async createPaymentMethod(cardDetails: any) {
    try {
      const paymentMethod = await CreatePaymentRepository.createPaymentMethod(cardDetails);
      return paymentMethod;
    } catch (error) {
      throw new Error("Error creating payment method: " + (error as Error).message);
    }
  }

  static async attachPaymentMethod(paymentIntentId: string, paymentMethodId: string) {
    try {
      const attachment = await CreatePaymentRepository.attachPaymentIntent(paymentIntentId, paymentMethodId);
      return attachment;
    } catch (error) {
      throw new Error("Error attaching payment method: " + (error as Error).message);
    }
  }
}
