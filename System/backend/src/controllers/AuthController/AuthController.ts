import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as userService from '../../services/UserService/userService';

interface CustomError extends Error {
    statusCode?: number;
}

//Define routes on every role
const roleRoutes: { [key: number]: string } = {
    1: '/submain/dashboard',
    2: '/admin/dashboard',
    3: '/principal/dashboard',
    4: '/principal/dashboard',
    5: '/registrar/dashboard',
    6: '/registrar/dashboard',
    7: '/cashier/dashboard',
    8: '/cashier/dashboard',
    9: '/guidance/dashboard',
    10: '/guidance/dashboard',
    11: '/clinic/dashboard',
    12: '/student/dashboard',
    13: '/guardian/dashboard',
    14: '/teacher/dashboard'
};

//Login
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { username, password }: { username: string; password: string } = req.body;

    try {
        const user = await userService.findUserByUsername(username);

        if (!user) {
            res.status(401).json({ message: 'Invalid username' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }

        if (user.role_is_active === 0) {
            res.status(403).json({ message: 'This Role has been InActive' });
            return;
        }

        // Generate JWT token with user data and role
        const token = userService.generateToken(user);

        // Get the role route based on the user's role
        const redirectUrl = roleRoutes[user.user_role_id] || '/homepage';

        // Send response with token and redirect URL
        res.json({
            message: 'Login successful',
            token,
            is_deleted: user.is_deleted,
            user_role_id: user.user_role_id,
            redirectUrl,
            id: user.id,
            username: user.username,
            email: user.gen_user_email,
            role_name: user.role_name,
            first_name: user.first_name,
            last_name: user.last_name,
            middle_name: user.middle_name,
            age: user.age,
            date_of_birth: user.date_of_birth,
            place_of_birth: user.place_of_birth,
            gender: user.gender,
            citizenship: user.citizenship,
            gen_user_email: user.gen_user_email,
            contact_number: user.contact_no
        });
    } catch (err) {
        const error = err as CustomError;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};


// Sign up
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { person_id,
        guardian_id,
        username,
        password,
        change_pass_code,
        gen_user_email,
        user_role_id,
        status_id,
        is_emailed,
        is_deleted,
        is_deleted_by }:
        {
            person_id: number;
            guardian_id: number,
            username: string;
            gen_user_email: string,
            password: string,
            change_pass_code: number;
            user_role_id: number,
            status_id: number,
            is_emailed: boolean,
            is_deleted: number,
            is_deleted_by: number
        } = req.body;

    try {
        const result = await userService.createUser(person_id,
            guardian_id,
            username,
            gen_user_email,
            password,
            change_pass_code,
            user_role_id,
            status_id,
            is_emailed,
            is_deleted,
            is_deleted_by);
        res.status(201).json(result);
    } catch (err) {
        const error = err as CustomError;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Logout
export const logout = (req: Request, res: Response): void => {
    res.json({ message: 'Logged out successfully' });
}