

import React, { useState } from 'react'
import { fetchMorty1 } from './utils/apiFetch-02';

export const RickMorty2 = () => {

    const [personajes , setPersonajes] = useState([]);

    const getPersonajes = async()=>{
        console.log('Buscando personajes...');
        const nuevosPersonajes = await fetchMorty1(`https://rickandmortyapi.com/api/character`);
        
        console.log(nuevosPersonajes)
        setPersonajes(nuevosPersonajes);
        
        
        
    }

    const reset = () => {
        setPersonajes([]);
        console.log("Usando reset function")
      };


  return (
    <div>
        <h2>Rick & Morty 2 </h2>
          <button onClick={getPersonajes}>Get them all!</button>
          <button onClick={reset}>Reset</button>
      {!personajes ? 
        <div>
          <h2>Theres´s no characters to show</h2>
        </div>
       : 
        <div>
          
          <div className="container w-screen m-0 p-0">
            <div className="row d-flex flex-wrap  align-content-start w-screen p-0 m-0">
              {personajes.map((personaje, index) => {
                return (
                  <div key={index} className=" col-lg-3 col-md-4  mt-3 m-0 p-1 h-100">
                    <h3>{personaje.name}</h3>
                    <img
                      src={personaje.image}
                      alt="poke-image"
                      style={{ width: "50%", height: "80%" }}
                    />
                
                          <h3>{personaje.id}</h3>
                    <h3>{personaje.status}</h3>
                    <h3>{personaje.species}</h3>
                    <h3>{personaje.type}</h3>
                    
                   
              
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
