import axios from 'axios';

export class PaymentRepository {
  private baseUrl: string;
  private secretKey: string;

  constructor(secretKey?: string) {
    this.baseUrl = 'https://api.paymongo.com/v1';
    this.secretKey = secretKey || process.env.PAYMONGO_SECRET_KEY || '';
  }

  private getAuthHeader(): string {
    return `Basic ${Buffer.from(this.secretKey).toString('base64')}`;
  }

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/payment_intents`,
      {
        data: {
          attributes: {
            amount,
            currency,
            payment_method_allowed: [
              "qrph",
              "card",
              "dob",
              "paymaya",
              "billease", 
              "gcash",
              "grab_pay"
            ],
            payment_method_options: {
              card: {
                request_three_d_secure: "any"
              }
            },
            capture_type: "automatic"
          },
        },
      },
      {
        headers: {
          Authorization: this.getAuthHeader(),
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }

  async createPaymentMethod(paymentMethodData: any): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/payment_methods`,
      paymentMethodData,
      {
        headers: {
          Authorization: this.getAuthHeader(),
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }

  async attachToPaymentIntent(paymentIntentId: string, paymentMethodId: string, returnUrl: string): Promise<any> {
    const response = await axios.post(
      `${this.baseUrl}/payment_intents/${paymentIntentId}/attach`,
      {
        data: {
          attributes: {
            payment_method: paymentMethodId,
            return_url: returnUrl,
          },
        },
      },
      {
        headers: {
          Authorization: this.getAuthHeader(),
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
}