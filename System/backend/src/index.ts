import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';

import { testDbConnection } from './util/database';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


import * as errorController from './controllers/error/error';
import api from './api/index';

import { roleAuth } from './middleware/roleAuth';
import { authenticateJWT } from './middleware/AuthMiddleware';
import AdminRoute from './routes/adminRoute/adminRoutes';
import { allroutes } from './importedRoutes/allroutes';
import clinic from './routes/departmental_usersRoute/clinic/clinicInventoryRoutes';
import adminReport from './routes/GenerateRreportsRoute/adminReportsRoute';
import RetrieveTableData from './routes/RetrieveModelsRoutes';
import updatePassword from './routes/updatepassword/updatepasswordroutes';
import RegistrarReport from './routes/departmental_usersRoute/registrar/registrarReportRoute';
import enrolledStudents from './routes/studentEnrolled_routes';
import allUser from './routes/adminRoute/all_user/user';

import studentEnrolled from './routes/studentEnrolled_routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }))

// CORS middleware
// // app.use(cors());
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     next();
// });
app.use(cors({
  origin: '*', // or '*'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

//no need to login
//online register
app.use('/get_all', allUser);
app.use('/online_registration', allroutes.online_register_route);
//for email configuration
app.use('/email', allroutes.emailRoute);
app.use('/password', updatePassword);

//for logging in
app.use('/auth', allroutes.authRoutes);

app.use('/get_all', RetrieveTableData);
app.use('/res-api', api);
//STUDENT ENROLLED
app.use('/enrolled', studentEnrolled);
api.use('/enrolled_students/online', enrolledStudents);

// Define the routes

// app.use('/principal', roleAuth([3, 4]), allroutes.termRoute);
app.use('/principal', allroutes.termRoute);
// app.use('/register', roleAuth([1]), allroutes.departmentalUsers);
app.use('/api', allroutes.paymentRoute);

//Admin
app.use('/admin', AdminRoute);
//Admin Rports
app.use('/generate', adminReport);


//Registrar
// app.use('/registrar', roleAuth([5]), allroutes.online_student_pendingRoute);     // Only Admin and Owner can access
app.use('/registrar', allroutes.online_student_pendingRoute);
app.use('/reports', RegistrarReport);

//ARI RA E SUMPAY ANG TANAN ! ! !
app.use('/clinic', clinic);
// router.get("/registrar/enrolled-students", RegistrarReportController.getEnrolledStudents);

// // Exports
// router.get("/registrar/export-pdf", ExportRegistrarReportService.exportToPDF);
// router.get("/registrar/export-excel", ExportRegistrarReportService.exportToExcel);    // Only Admin and Owner can access

//ARI RA E SUMPAY ANG TANAN ! ! !
app.use('/clinic', clinic);
app.use(errorController.get500);

// Export the app and testDbConnection for `server.js` to use
export { app, testDbConnection };
