import axios from 'axios';
import config from '../../config/config.json';

export class CreatePaymentRepository {
  static async createPaymentMethod(cardDetails: any) {
    const data = { data: { attributes: cardDetails } };

    try {
      const response = await axios.post(
        `${process.env.PAYMONGO_API_URL}payment_methods`,
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYMONGO_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Error creating payment method');
    }
  }

  static async createPaymentIntent(body: any) {
    try {
      // Ensure the body is structured correctly
      const formattedBody = {
        data: {
          attributes: body // Add amount and currency inside attributes
        }
      };
  
      const response = await axios.post(
        `${process.env.PAYMONGO_API_URL}/payment_intents`,
        formattedBody,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Basic ${process.env.PAYMONGO_SECRET_KEY}`
          }
        }
      );

      return response.data;
    } catch (error: any) {
      // Log the error response from PayMongo API for better debugging
      if (error.response) {
        console.error("PayMongo Error Response Data:", error.response.data);
        console.error("PayMongo Error Response Status:", error.response.status);
        console.error("PayMongo Error Response Headers:", error.response.headers);
      } else {
        console.error("Error Message:", error.message);
      }
  
      // Throw a more specific error message with the details
      throw new Error(`Error creating payment intent: ${error.message || "Unknown error"}`);
    }
  }




  static async attachPaymentIntent(paymentIntentId: string, body: any) {
    try {
      const response = await axios.post(
        `${process.env.PAYMONGO_API_URL}/payment_intents/${paymentIntentId}/attach`,
        body,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic " + process.env.PAYMONGO_SECRET_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Error attaching payment method to payment intent');
    }
  }
}
