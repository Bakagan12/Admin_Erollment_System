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
exports.PaymentService = void 0;
const paymentRepo_1 = require("../../repository/requestsRepo/paymentRepo");
class PaymentService {
    constructor(secretKey) {
        this.paymentRepo = new paymentRepo_1.PaymentRepository(secretKey);
    }
    createPaymentIntent(amount, currency) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentRepo.createPaymentIntent(amount, currency);
        });
    }
    createPaymentMethod(paymentMethodData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentRepo.createPaymentMethod(paymentMethodData);
        });
    }
    attachToPaymentIntent(paymentIntentId, paymentMethodId, returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentRepo.attachToPaymentIntent(paymentIntentId, paymentMethodId, returnUrl);
        });
    }
}
exports.PaymentService = PaymentService;
