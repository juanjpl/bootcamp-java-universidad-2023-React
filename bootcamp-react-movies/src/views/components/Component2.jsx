import React from 'react'
import { useAppContext } from '../context/ViewContext'

export const Component2 = () => {

    //otenemos la funcion setContextValue del provider
    const {setContextValue} = useAppContext();

    const cambiarValorEnContexto = () => {
        setContextValue('A');
    }

  return (
    <div>
        <button onClick={cambiarValorEnContexto} >Enviar Valor</button>

    </div>
  )
}
