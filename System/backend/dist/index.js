"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDbConnection = exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = require("./util/database");
Object.defineProperty(exports, "testDbConnection", { enumerable: true, get: function () { return database_1.testDbConnection; } });
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const errorController = __importStar(require("./controllers/error/error"));
const index_1 = __importDefault(require("./api/index"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoute/adminRoutes"));
const allroutes_1 = require("./importedRoutes/allroutes");
const clinicInventoryRoutes_1 = __importDefault(require("./routes/departmental_usersRoute/clinic/clinicInventoryRoutes"));
const adminReportsRoute_1 = __importDefault(require("./routes/GenerateRreportsRoute/adminReportsRoute"));
const RetrieveModelsRoutes_1 = __importDefault(require("./routes/RetrieveModelsRoutes"));
const updatepasswordroutes_1 = __importDefault(require("./routes/updatepassword/updatepasswordroutes"));
const registrarReportRoute_1 = __importDefault(require("./routes/departmental_usersRoute/registrar/registrarReportRoute"));
const studentEnrolled_routes_1 = __importDefault(require("./routes/studentEnrolled_routes"));
const user_1 = __importDefault(require("./routes/adminRoute/all_user/user"));
const studentEnrolled_routes_2 = __importDefault(require("./routes/studentEnrolled_routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// CORS middleware
// // app.use(cors());
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
app.use((0, cors_1.default)({
    origin: '*', // or '*'
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
//no need to login
//online register
app.use('/get_all', user_1.default);
app.use('/online_registration', allroutes_1.allroutes.online_register_route);
//for email configuration
app.use('/email', allroutes_1.allroutes.emailRoute);
app.use('/password', updatepasswordroutes_1.default);
//for logging in
app.use('/auth', allroutes_1.allroutes.authRoutes);
app.use('/get_all', RetrieveModelsRoutes_1.default);
app.use('/res-api', index_1.default);
//STUDENT ENROLLED
app.use('/enrolled', studentEnrolled_routes_2.default);
index_1.default.use('/enrolled_students/online', studentEnrolled_routes_1.default);
// Define the routes
// app.use('/principal', roleAuth([3, 4]), allroutes.termRoute);
app.use('/principal', allroutes_1.allroutes.termRoute);
// app.use('/register', roleAuth([1]), allroutes.departmentalUsers);
app.use('/api', allroutes_1.allroutes.paymentRoute);
//Admin
app.use('/admin', adminRoutes_1.default);
//Admin Rports
app.use('/generate', adminReportsRoute_1.default);
//Registrar
// app.use('/registrar', roleAuth([5]), allroutes.online_student_pendingRoute);     // Only Admin and Owner can access
app.use('/registrar', allroutes_1.allroutes.online_student_pendingRoute);
app.use('/reports', registrarReportRoute_1.default);
//ARI RA E SUMPAY ANG TANAN ! ! !
app.use('/clinic', clinicInventoryRoutes_1.default);
// router.get("/registrar/enrolled-students", RegistrarReportController.getEnrolledStudents);
// // Exports
// router.get("/registrar/export-pdf", ExportRegistrarReportService.exportToPDF);
// router.get("/registrar/export-excel", ExportRegistrarReportService.exportToExcel);    // Only Admin and Owner can access
//ARI RA E SUMPAY ANG TANAN ! ! !
app.use('/clinic', clinicInventoryRoutes_1.default);
app.use(errorController.get500);
