import React, { useEffect, useState } from 'react'
import { sharedService } from './shared-service'


const Component3 = () => {
    const [mensaje, setMensaje] = useState('');

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
           console.log('componente 3 destruido')
            subscription$.unsubscribe();
           
        }
    },[])

    const reset = ()=>{
        sharedService.reset();
    }


  return (
    <>
    <h1>Componente 3</h1>
    <h3>{mensaje} </h3>
    <button onClick={reset} >Reset</button>
    </>
  )
}

export default Component3