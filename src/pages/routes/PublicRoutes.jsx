import {Navigate, Outlet} from 'react-router-dom'; 

// type Props ={
//     isloggin : Boolean
// }

const PublicRoutes = (isloggin) => {
    return isloggin ? <Navigate to ="/home-page" replace /> : <Outlet/>;
};

export default PublicRoutes 