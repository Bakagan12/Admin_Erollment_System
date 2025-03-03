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
exports.CreatePaymentController = void 0;
const createPaymentService_1 = require("../../services/requestService/createPaymentService");
class CreatePaymentController {
    static createPaymentIntent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, currency } = req.body;
            try {
                const paymentIntent = yield createPaymentService_1.CreatePaymentService.createPaymentIntent(amount, currency);
                res.status(201).json(paymentIntent);
            }
            catch (error) {
                console.error("Error creating payment intent:", error.message); // Log the error for debugging
                res.status(400).json({ message: error.message });
            }
        });
    }
    static createPaymentMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cardDetails = req.body;
            try {
                const paymentMethod = yield createPaymentService_1.CreatePaymentService.createPaymentMethod(cardDetails);
                res.status(201).json(paymentMethod);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static attachPaymentMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { paymentIntentId, paymentMethodId } = req.body;
            try {
                const result = yield createPaymentService_1.CreatePaymentService.attachPaymentMethod(paymentIntentId, paymentMethodId);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.CreatePaymentController = CreatePaymentController;
