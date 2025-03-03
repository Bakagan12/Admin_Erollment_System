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
// services/paymentService.ts
const payment_1 = __importDefault(require("../../repository/requestsRepo/payment"));
class PaymentService {
    createPaymentMethod(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield payment_1.default.createPaymentMethod(data);
                return result;
            }
            catch (error) {
                throw new Error('Error in creating payment method: ' + error.message);
            }
        });
    }
}
exports.default = new PaymentService();
