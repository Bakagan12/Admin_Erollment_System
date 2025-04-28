import authRoutes from '../routes/authRoute/authRoutes';
import termRoute from '../routes/departmental_usersRoute/principal/termRoute';
import emailRoute from '../routes/emailRoute/emailRoute';
import paymentRoute from '../routes/requestsRoute/paymentRoute';
import online_register_route from '../routes/online_registrationRoute/onlineRegistrationRoute'

//Registrar
import online_student_pendingRoute from '../routes/departmental_usersRoute/registrar/online_apply_pendingRoute';

//Admin

export const allroutes = {
    authRoutes,
    termRoute,
    emailRoute,
    paymentRoute,
    online_register_route,

    // registrar
    online_student_pendingRoute,
}