import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/users/user";
import { Mensaje } from "../../mensaje/ui/Mensaje";
import {
  createMensajes,
  modifyMensajes,
  resetMensajes,
} from "../../redux/mensajes/mensajes";

export const UserPage = () => {
  //importamos el dispatcher

  const dispatcher = useDispatch();
  const userState = useSelector((store) => store.users);

  const crearUsuario = () => {
    //view > dispatch > action

    dispatcher(
      createUser({
        name: "carlos",
        email: "carlos@mail.com",
      })
    );

    dispatcher(
      createMensajes({
        msj: "Usuario Creado",
      })
    );
  };

  const modificarUsuario = () => {
    dispatcher(
      modifyUser({
        name: "Juan",
      })
    );

    dispatcher(
      modifyMensajes({
        msj: "Usuario Modificado",
      })
    );
  };

  const reiniciarUsuario = () => {
    dispatcher(resetUser());

    dispatcher(resetMensajes());
  };

  return (
    <>
      {JSON.stringify(userState)}
      <hr></hr>
      <button onClick={crearUsuario}>Crear Usuario</button>
      <hr />
      <button onClick={modificarUsuario}>Modificar Usuario</button>
      <hr />
      <button onClick={reiniciarUsuario}>Resetear Usuarios</button>
      <hr />
      <Mensaje />
    </>
  );
};
