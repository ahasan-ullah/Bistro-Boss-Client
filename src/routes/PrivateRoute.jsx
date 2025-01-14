import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(authContext);

  if(loading){
    return <process className="progres w-56"></process>
  }
  if(user){
    return children;
  }
  return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;