import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({children}) => {
  const {user,loading}=useAuth();
  const [isAdmin,isAdminLoading]=useAdmin();
  const location=useLocation();
  if(loading || isAdminLoading){
    return <progress className="progres w-56"></progress>
  }
  if(user && isAdmin){
    return children;
  }
  return <Navigate state={{from:location}} replace to={"/login"}></Navigate>
};

export default AdminRoutes;