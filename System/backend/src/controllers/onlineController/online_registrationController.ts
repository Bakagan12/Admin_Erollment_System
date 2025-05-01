import { Request, Response } from 'express';
import { OnlineRegistrationService } from '../../services/online_enrollment/online_enrollmentService';

export const registerStudentController = async (req: Request, res: Response) => {
  try {
    const {
      user, person, guardian, emergency,
      student, mother, father
    } = req.body;

    const result = await OnlineRegistrationService.registerStudent(
      user, person, guardian, emergency, student, mother, father
    );

    res.status(201).json({
      message: result.message,
      data: {
        user,
        person,
        guardian,
        emergency,
        student,
        mother,
        father,
        ...result.data,
        plaintextPassword: result.plaintextPassword
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
};
