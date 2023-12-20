import {Navigate, Outlet} from 'react-router-dom'; 

// type Props ={
//     isloggin: boolean;
// }

const AuthRoutes = (isloggin) => {
    return isloggin ? <Outlet/> : <Navigate to="/sign-in" replace />;
}

export default AuthRoutes;