// services/paymentService.ts
import PaymentRepository from '../../repository/requestsRepo/payment';

interface PaymentData {
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  cvv: string;
}

class PaymentService {
  async createPaymentMethod(data: PaymentData): Promise<any> {
    try {
      const result = await PaymentRepository.createPaymentMethod(data);
      return result;
    } catch (error) {
      throw new Error('Error in creating payment method: ' + (error as Error).message);
    }
  }
}

export default new PaymentService();
