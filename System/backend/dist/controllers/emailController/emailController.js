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
exports.getUsernameByEmail = exports.sendTestEmail = void 0;
const mailerService_1 = require("../../services/mailService/mailerService"); // Importing sendEmail service
const findEmailGenUserservice_1 = require("../../services/mailService/findEmailGenUserservice");
const sendTestEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body; // Get email from request body
    try {
        // Call sendEmail with the provided email
        const user = yield (0, mailerService_1.sendEmail)(email);
        res.status(200).send({ message: 'Email sent successfully', user });
    }
    catch (error) {
        // Handle errors in case the email wasn't sent
        // console.error('Error sending email:', error);
        res.status(500).json({
            message: 'Error Sending Email',
            error: (error instanceof Error) ? error.message : error,
        });
    }
});
exports.sendTestEmail = sendTestEmail;
const getUsernameByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield findEmailGenUserservice_1.GenUserService.getUserByEmail(email);
        res.status(201).json(user);
    }
    catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({
            message: 'Error registering departmental user',
            error: (error instanceof Error) ? error.message : error,
        });
    }
});
exports.getUsernameByEmail = getUsernameByEmail;
