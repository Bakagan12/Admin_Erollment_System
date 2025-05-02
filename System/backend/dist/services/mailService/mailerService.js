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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_json_1 = __importDefault(require("../../config/config.json"));
const emailRepo_1 = require("../../repository/emailRepository/emailRepo"); // Import EmailRepo
const transporter = nodemailer_1.default.createTransport({
    host: config_json_1.default.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
        user: config_json_1.default.EMAIL_USER,
        pass: config_json_1.default.EMAIL_PASS,
    },
});
function generate6DigitCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Always 6 digits
}
// Function to send a new password to the user
const sendEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(email);
        const user = yield emailRepo_1.EmailRepo.find(email);
        if (!user) {
            throw new Error('This Email has no Account!');
        }
        const { username, gen_user_email } = user;
        // Generate and update 6-digit passcode
        const passcode = generate6DigitCode();
        const updateUser = yield emailRepo_1.EmailRepo.updateChangePassCode(email, passcode);
        const subject = 'Your New Account Details';
        const html = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Account Reset</title>
                      <style>
                          body {
                              font-family: Arial, sans-serif;
                              margin: 0;
                              padding: 0;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                              background-color: #f7f7f7;
                          }
                  
                          .container {
                              background-color: #f7f7f7;
                              border-radius: 8px;
                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                              width: 90%;
                              max-width: 600px;
                              padding: 20px;
                              text-align: center;
                          }
                  
                          p, .code {
                              font-size: 16px;
                              line-height: 1.6;
                              color: #333;
                          }
                  
                          strong {
                              color: #007BFF;
                          }
                  
                          .header {
                              font-size: 20px;
                              margin-bottom: 20px;
                              color: #444;
                          }

                          .footer {
                              margin-top: 20px;
                              font-size: 14px;
                              color: #777;
                          }

                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <p class="header">Hello <strong>${gen_user_email}</strong>,</p>
                          <p>Your account has been verified. Your Username is: <strong>${username}</strong> and to continue the process, to change your password immediately.</p>
                         <p>Your verification code is:</p>
                          <div class="code"><strong>${passcode}</strong></div>
                          <p>Please use this code to continue the password reset process.</p>
                          <div class="footer">
                              <p>If you didn’t request this change, please ignore this email or please contact support immediately.</p>
                          </div>
                      </div>
                  </body>
                  </html>

    `;
        const mailOptions = {
            from: config_json_1.default.EMAIL_USER,
            to: gen_user_email,
            subject: subject,
            // text: text,
            html: html,
        };
        // Send the email
        const info = yield transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return updateUser;
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
});
exports.sendEmail = sendEmail;
