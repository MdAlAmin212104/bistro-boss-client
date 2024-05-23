
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase/firebase_config";
/* eslint-disable react/prop-types */

const PrivateRoutes = ({children}) => {
    const { user, loading } = auth();
    const location = useLocation()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }

    if(user){
        return children;
    }


    return <Navigate to='/login' state={{from : location }} replace></Navigate>
};

export default PrivateRoutes;