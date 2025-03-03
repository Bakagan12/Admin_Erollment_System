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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentService = void 0;
const createPayment_1 = require("../../repository/requestsRepo/createPayment");
class CreatePaymentService {
    static createPaymentIntent(amount, currency) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = { amount, currency };
                const paymentIntent = yield createPayment_1.CreatePaymentRepository.createPaymentIntent(body);
                return paymentIntent;
            }
            catch (error) {
                // Add more context to the error
                throw new Error(`Error creating payment intent: ${error.message || "Unknown error"}`);
            }
        });
    }
    static createPaymentMethod(cardDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentMethod = yield createPayment_1.CreatePaymentRepository.createPaymentMethod(cardDetails);
                return paymentMethod;
            }
            catch (error) {
                throw new Error("Error creating payment method: " + error.message);
            }
        });
    }
    static attachPaymentMethod(paymentIntentId, paymentMethodId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attachment = yield createPayment_1.CreatePaymentRepository.attachPaymentIntent(paymentIntentId, paymentMethodId);
                return attachment;
            }
            catch (error) {
                throw new Error("Error attaching payment method: " + error.message);
            }
        });
    }
}
exports.CreatePaymentService = CreatePaymentService;
