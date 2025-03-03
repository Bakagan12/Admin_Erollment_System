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
// repositories/paymentRepository.ts
const axios_1 = __importDefault(require("axios"));
class PaymentRepository {
    createPaymentMethod(paymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiKey = process.env.PAYMONGO_API_KEY;
            try {
                const response = yield axios_1.default.post('https://api.paymongo.com/v1/payment_methods', {
                    data: {
                        attributes: {
                            type: 'credit_card', // Modify this based on your needs
                            details: paymentData,
                        },
                    },
                }, {
                    headers: {
                        Authorization: `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
                        'Content-Type': 'application/json',
                    },
                });
                return response.data;
            }
            catch (error) {
                throw new Error('Error creating payment method: ' + error.message);
            }
        });
    }
}
exports.default = new PaymentRepository();
