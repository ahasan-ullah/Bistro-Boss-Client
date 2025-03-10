import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(authContext);
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