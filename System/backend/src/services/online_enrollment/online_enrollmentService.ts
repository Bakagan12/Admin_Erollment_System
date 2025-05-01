import bcrypt from 'bcryptjs';
import { online_registration } from '../../repository/onlineRegistrationRepo/onlineRegistrationrepo';

export class OnlineRegistrationService {
  static async registerStudent(
    user: any,
    person: any,
    guardian: any,
    emergency: any,
    student: any,
    mother: any,
    father: any
  ) {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const nextYear =Number( currentYear) + 1;

    const lastGeneratedUsername = await online_registration.getLastGeneratedUsername();
    let nextNumber = 1;

     // If there is a last generated username, extract the numeric suffix and increment it
    if (lastGeneratedUsername && lastGeneratedUsername.username) {
      const lastUsername = lastGeneratedUsername.username;
      const lastDigits = lastUsername.slice(-4);  // Extract last 4 digits of username
      const parsed = parseInt(lastDigits, 10);
      if (!isNaN(parsed)) nextNumber = parsed + 1;
    }
    // // Get student count
    // const studentCount = await online_registration.getStudentCount();
    // const count = Number(studentCount?.total || 0) + 1;
    const paddedCount = nextNumber.toString().padStart(4, '0');
    const generatedUsername = `SCLC-${currentYear}${nextYear}${paddedCount}`;

    // Generate random password and hash
    const randomPassword = Math.random().toString(36).slice(-10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // Set username and password on user object
    user.username = generatedUsername;
    user.password = hashedPassword;
    user.gen_user_email = person.email;
    student.student_no = generatedUsername;

    const result = await online_registration.onlineRegister(
      user, person, guardian, emergency, student, mother, father
    );

    return {
      ...result,
      plaintextPassword: randomPassword // return plaintext password if needed for emailing/display
    };
  }
}
