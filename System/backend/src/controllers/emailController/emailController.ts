// backend/src/controllers/emailController.ts
import { Request, Response, NextFunction } from 'express';
import { sendEmail } from '../../services/mailService/mailerService';  // Importing sendEmail service
import { GenUserService } from '../../services/mailService/findEmailGenUserservice';


export const sendTestEmail = async (req: Request, res: Response) => {
  const { email } = req.body;  // Get email from request body

  try {
    // Call sendEmail with the provided email
    const user = await sendEmail(email);
    res.status(200).send({ message: 'Email sent successfully', user});

  } catch (error) {
    // Handle errors in case the email wasn't sent
    // console.error('Error sending email:', error);
    res.status(500).json({
        message: 'Error Sending Email',
        error: (error instanceof Error) ? error.message:error,
    });
  }
};

export const getUsernameByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    const user = await GenUserService.getUserByEmail(email);
     res.status(201).json(user);
  } catch (error) {
    console.error('Error retrieving user:', error);
      res.status(500).json({
              message: 'Error registering departmental user',
              error: (error instanceof Error) ? error.message : error,
          });
  }
};
