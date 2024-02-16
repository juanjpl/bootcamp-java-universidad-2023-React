import React, { useState } from "react";
import { login } from "./application/login";
import { loginRepository } from "./infrastructure/login-repository";
import { appConfig } from "../config";
import { toLogin } from "./infrastructure/login-adapter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { createUser } from "../redux/users/user";
import { useNavigate } from "react-router-dom";
import { routes } from "../navbar/routes";



export const Login = () => {

    const dispatcher = useDispatch();
    const navigate = useNavigate();

  const [userName, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);



  const loginn = async () => {

    const loginUseCase = login(
      loginRepository(appConfig.REQ_RES_PATH),
      toLogin()
    );


    try {
        const userLoginData = await loginUseCase(userName,password);
        toast("Usuario encontrado !!!")     
        dispatcher(createUser(userLoginData))    
        navigate(routes.public.PROFILE)         

    } catch (error) {
        toast(error.message)
    }

   

    //dispatch al redux del usuario
  };
  return (
    <div className="col-lg-6  mx-auto">
      <div className=" mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          User Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <ToastContainer />
     
      <button type="button" className="btn btn-primary" onClick={loginn}>
       Login
      </button>
    </div>
  );
};
