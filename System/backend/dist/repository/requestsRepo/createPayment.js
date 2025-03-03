"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = __importDefault(require("../../config/config.json"));
class CreatePaymentRepository {
    static createPaymentMethod(cardDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { data: { attributes: cardDetails } };
            try {
                const response = yield axios_1.default.post(`${process.env.PAYMONGO_API_URL}payment_methods`, data, {
                    headers: {
                        Authorization: `Bearer ${process.env.PAYMONGO_SECRET_KEY}`,
                        'Content-Type': 'application/json',
                    },
                });
                return response.data;
            }
            catch (error) {
                throw new Error('Error creating payment method');
            }
        });
    }
    static createPaymentIntent(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Ensure the body is structured correctly
                const formattedBody = {
                    data: {
                        attributes: body // Add amount and currency inside attributes
                    }
                };
                const response = yield axios_1.default.post(`${process.env.PAYMONGO_API_URL}/payment_intents`, formattedBody, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Basic ${config_json_1.default.PAYMONGO_SECRET_KEY}`
                    }
                });
                return response.data;
            }
            catch (error) {
                // Log the error response from PayMongo API for better debugging
                if (error.response) {
                    console.error("PayMongo Error Response Data:", error.response.data);
                    console.error("PayMongo Error Response Status:", error.response.status);
                    console.error("PayMongo Error Response Headers:", error.response.headers);
                }
                else {
                    console.error("Error Message:", error.message);
                }
                // Throw a more specific error message with the details
                throw new Error(`Error creating payment intent: ${error.message || "Unknown error"}`);
            }
        });
    }
    static attachPaymentIntent(paymentIntentId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`${process.env.PAYMONGO_API_URL}/payment_intents/${paymentIntentId}/attach`, body, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Basic " + process.env.PAYMONGO_SECRET_KEY,
                    },
                });
                return response.data;
            }
            catch (error) {
                throw new Error('Error attaching payment method to payment intent');
            }
        });
    }
}
exports.CreatePaymentRepository = CreatePaymentRepository;
