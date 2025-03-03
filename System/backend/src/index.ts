import express, { Request, Response, NextFunction } from 'express';

import { testDbConnection } from './util/database';
import * as errorController from './controllers/error/error';
import { roleAuth } from './middleware/roleAuth';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoute/authRoutes';
import  departmentalUsers from './routes/adminRoute/allUser/allUserRoute';
import selectUserRoute from './routes/adminRoute/selectRoute/selectUserRoute';
import termRoute from './routes/departmental_usersRoute/principal/termRoute';
import emailRoute from './routes/emailRoute/emailRoute';
import paymentRoute from './routes/requestsRoute/paymentRoute'
import createPaymentRoute from './routes/requestsRoute/createPaymentRoutes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Define the routes
app.use('/auth', authRoutes);
app.use('/register', roleAuth([1]), departmentalUsers);  // Only Admin can access
app.use('/admin', roleAuth([1]), selectUserRoute);     // Only Admin and Owner can access
app.use('/principal', roleAuth([3, 4]), termRoute);
app.use('/api', paymentRoute);
app.use('/payment', createPaymentRoute);

//for email configutration
app.use('/email', emailRoute);

// Error handling middleware
app.use(errorController.get404);
app.use(errorController.get500);

// Export the app and testDbConnection for `server.js` to use
export { app, testDbConnection };
