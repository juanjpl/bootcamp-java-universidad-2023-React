import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMensajes } from "../../redux/mensajes/mensajes";

export const Mensaje = () => {
  const mensajeState = useSelector((store) => store.mensajes);

  const dispatcher = useDispatch();

  const limpiar = () => {
    dispatcher(resetMensajes());
  };

  return (
    <>
      {mensajeState?.msj && (
        <div>
          <h1>{mensajeState?.msj} </h1>
         
          <button onClick={limpiar}>(X)</button>
        </div>
      )}
    </>
  );
};
