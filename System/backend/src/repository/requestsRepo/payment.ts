// repositories/paymentRepository.ts
import axios, { AxiosResponse } from 'axios';

interface PaymentData {
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  cvv: string;
}

class PaymentRepository {
  async createPaymentMethod(paymentData: PaymentData): Promise<AxiosResponse<any>> {
    const apiKey = process.env.PAYMONGO_API_KEY;

    try {
      const response = await axios.post(
        'https://api.paymongo.com/v1/payment_methods',
        {
          data: {
            attributes: {
              type: 'credit_card', // Modify this based on your needs
              details: paymentData,
            },
          },
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Error creating payment method: ' + (error as Error).message);
    }
  }
}

export default new PaymentRepository();
