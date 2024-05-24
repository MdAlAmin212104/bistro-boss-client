import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";

const AdminRoutes = ({children}) => {
    const { user, loading}= useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-md"></span>
    }

    if(user && isAdmin?.admin){
        return children;
    }


    return <Navigate to='/' state={{from : location }} replace></Navigate>
};

export default AdminRoutes;