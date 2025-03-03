"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPayment_1 = require("../../controllers/request/createPayment");
const router = (0, express_1.Router)();
// Route for creating payment intent
router.post('/create_payment_intent', createPayment_1.CreatePaymentController.createPaymentIntent);
// Route for creating payment method
router.post('/create_payment_method', createPayment_1.CreatePaymentController.createPaymentMethod);
// Route for attaching payment method to payment intent
router.post('/attach_payment_method', createPayment_1.CreatePaymentController.attachPaymentMethod);
exports.default = router;
