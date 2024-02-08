import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { login } from "./application/login";
import { loginRepository } from "./infrastructure/login-repository";
import { appConfig } from "../config";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { toLogin } from "./infrastructure/login-adapter";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginn = async () => {
    const loginUseCase = login(
      loginRepository(appConfig.REQ_RES_PATH),
      toLogin()
    );
    try {
        const userLoginData = await loginUseCase();
    console.log(userLoginData);

    } catch (error) {
        console.log(error)
    }

   

    //dispatch al redux del usuario
  };
  return (
    <div>
      <div className="mb-3">
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
     
      <button type="button" className="btn btn-primary" onClick={loginn}>
       Login
      </button>
    </div>
  );
};
