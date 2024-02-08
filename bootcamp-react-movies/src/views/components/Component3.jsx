import React from "react";
import { useAppContext } from "../context/ViewContext";

export const Component3 = () => {
  //obtiene el GET del context en el provider
  const { getContextValue,setContextValue } = useAppContext();

  const enviarAlContexto = ()=>{
    setContextValue('ABC')
  }
  return (
    <div>
        <hr />
      <h2>El valor del contexto es: {getContextValue} </h2>
      <button onClick={enviarAlContexto} >reset</button>
    </div>
  );
};
