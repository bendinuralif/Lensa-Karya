import {Routes, Route} from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";


import Home from "../home/Home"
import Signin from "../auth/Login";
import Signup from "../auth/Daftar";

const Routing = () => {
    const token = localStorage.getItem(`Authorization`);
    const isloggin = token !== null ? false : true

    return (
        <Route>
            <Route path="/">
            < Route element= {<AuthRoutes isloggin={isloggin}/>}>
                <Route path="home" element={<Home />}/>
            </Route>
                < Route path="/" element= {<PublicRoutes isloggin={isloggin}/>}>
                    <Route path="sign-in" element={<Signin />}/>
                    <Route path="sign-up" element={<Signup />}/>
                </Route>
            </Route>
        </Route>
    )
};

export default Routing