import React, { useEffect, useState } from 'react'
import { sharedService } from './shared-service'


const Component2 = () => {
    const[mensaje, setMensaje] = useState('');

    let subscription$; 
    


    useEffect(()=>{

        subscription$= sharedService.getSubject().subscribe(
            data=>{
                setMensaje((prev)=>data);
            }
        );
        //Se ejecuta cuando se destruye el componente
        return()=>{
            //...
            console.log('componente 2 destruido')
            subscription$.unsubscribe();
           
        }
    },[])


  return (
    <>
    <h1>Componente 2</h1>
    <h2>{mensaje} </h2>
    </>
  )
}

export default Component2