import React, { useEffect, useState } from "react";
import { Menu } from "./components/menu/Menu";
import { appConfig } from "../config";

export const Profile = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    fetch(`${appConfig.REQ_RES_PATH}/api/user/2`)
      .then((response) => response.json)
      .then((data) => setUserData(data));
  });
  return (
    <div className="container">
      {!userData ? (
        <h3>No hay data de usuario</h3>
      ) : (
        <div className="row mt-5">
          <div>
            <Menu />
          </div>
          <div className="col-sm-12 col-md-6">
            <h3>Datos Personales</h3>
            <h4>{userData.data.first_name}</h4>
            <h4>{userData.data.email}</h4>
            <h4>{userData.data.last_name}</h4>
          </div>

          <div className="col-sm-12 col-md-6">
            <h3>Formulario</h3>
          </div>
        </div>
      )}
    </div>
  );
};
