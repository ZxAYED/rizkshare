import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";
import { Audio } from  'react-loader-spinner'
import 'react-loading-skeleton/dist/skeleton.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return  <div className="flex justify-center items-center h-[50vh]"><Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'rgb(153, 98, 122)'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      /></div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/RizkShare/Login' replace></Navigate>

};

export default PrivateRoute;