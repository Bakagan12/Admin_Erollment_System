import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/config.json';
import { authRepository } from '../../repository/authRepository/auth';
import { GenUser } from '../../models/genUser';
import { UserRoles } from '../../models/userRoles';
import { Persons } from '../../models/persons';

const JWT_SECRET: string = config.JWT_SECRET || 'letmein';

export const createUser = async (
    person_id: number,
    guardian_id: number,
    username: string,
    gen_user_email: string,
    password: string,
    user_role_id: number,
    change_pass_code: number,
    status_id: number = 1,
    is_emailed: boolean,
    is_deleted: number,
    is_deleted_by: number
): Promise<{ message: string }> => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user: GenUser = {
            person_id,
            guardian_id,
            username,
            password: hashedPassword,
            user_role_id,
            status_id,
            gen_user_email,
            change_pass_code,
            is_emailed,
            is_deleted,
            is_deleted_by
        };

        await authRepository.save(user);

        return { message: 'User Registered!' };
    } catch (err) {
        throw new Error('Error creating user: ' + (err as Error).message);
    }
};


type UserWithRoleStatus = GenUser & Persons & UserRoles & { role_is_active: number };
export const findUserByUsername = async (
    username: string
): Promise<UserWithRoleStatus | null> => {
    try {
        const result = await authRepository.find(username);

        if (!result || result.length === 0) {
            return null;
        }

        return result[0] as UserWithRoleStatus;
    } catch (err) {
        throw new Error('Error finding user: ' + (err as Error).message);
    }
};

export const generateToken = (user: GenUser): string => {
    return jwt.sign(
        { id: user.id, username: user.username, user_role_id: user.user_role_id },
        JWT_SECRET,
        { expiresIn: '3h' }
    );
};
