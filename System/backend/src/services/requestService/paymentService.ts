import { PaymentRepository } from "../../repository/requestsRepo/paymentRepo";

export class PaymentService {
  private paymentRepo: PaymentRepository;

  constructor(secretKey: string) {
    this.paymentRepo = new PaymentRepository(secretKey);
  }

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    return this.paymentRepo.createPaymentIntent(amount, currency);
  }

  async createPaymentMethod(paymentMethodData: any): Promise<any> {
    return this.paymentRepo.createPaymentMethod(paymentMethodData);
  }

  async attachToPaymentIntent(paymentIntentId: string, paymentMethodId: string, returnUrl: string): Promise<any> {
    return this.paymentRepo.attachToPaymentIntent(paymentIntentId, paymentMethodId, returnUrl);
  }
}