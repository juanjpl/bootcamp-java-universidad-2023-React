import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const AuthGuard = ()=>{
    //mira algo y si no lo cumple navega al home

    const loginSlice = useSelector(store => store.users);

    return loginSlice.email ? <Outlet/> : <Navigate replace to={'/'} />
}

export default AuthGuard;