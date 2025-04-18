import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
  const {user,loading}=useAuth();
  const location=useLocation();

  if(loading){
    return <progress className="progres w-56"></progress>
  }
  if(user){
    return children;
  }
  return <Navigate state={{from:location}} replace to={"/login"}></Navigate>
};

export default PrivateRoute;