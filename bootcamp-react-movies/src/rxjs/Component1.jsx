import React, { useEffect, useState } from 'react'
import Component2 from './Component2'
import { sharedService } from './shared-service'
import Component3 from './Component3';

export const Component1 = () => {

    const[mensaje , setMensaje] = useState('');

    const enviarMensaje =()=>{
        //emito el mensaje
        if(mensaje.length === 0) return;
        sharedService.next(mensaje);
    }

    /*

    useEffect(()=>{
        console.log(mensaje)
    },[mensaje])
    */
  return (
    <>
    <h2>Componente 1</h2>
   
    <input value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></input>
    <button onClick={enviarMensaje} >Enviar mensaje</button>
    <hr />
    <Component2/>
    <Component3/>
    </>
  )
}
