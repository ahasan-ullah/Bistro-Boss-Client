import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(authContext);
  const location=useLocation();

  if(loading){
    return <process className="progres w-56"></process>
  }
  if(user){
    return children;
  }
  return <Navigate state={{from:location}} replace to={"/login"}></Navigate>
};

export default PrivateRoute;