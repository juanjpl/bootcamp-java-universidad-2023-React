import React, { useEffect, useState } from "react";
import { appConfig } from "../../config";
import { findResource } from "../application/getAllCharacters/get-all-data";
import { resourceRepository } from "../infrastructure/fetch-resources-repository";

export const RickMortyHome = () => {
  const [characters, setCharacters] = useState(undefined);
  const [next , setNext] = useState(undefined);

  const getCharacters = async () => {
    //usando un caso de uso > infrastructure > domain

    //console.log(appConfig.REQ_RES_PATH_RICKMORTY)
    const useCase = findResource(
     
        resourceRepository(appConfig.REQ_RES_PATH_RICKMORTY,next)

      );
  
      const myListResources = await useCase();
   
      //console.log(myListResources[0])
      console.log(myListResources[1].next)
      setCharacters(myListResources[0]);
      setNext(myListResources[1].next)
      console.log(characters)
    
  };

  const getData = async()=>{
    const useCase = findResource(
     
        resourceRepository(undefined,next)

      );
  
      const myListResources = await useCase();
   
      //console.log(myListResources[0])
      console.log(myListResources[1].next)
      setCharacters([...characters,...myListResources[0]]);
      setNext(myListResources[1].next)
      console.log(characters)

  } 
  

  useEffect(() => {

    (!next)
    ?
    null
    :
    getData();
  }, [next]);



  const reset = () => {
    setCharacters(undefined);
  };

  return (
    <div>
        <h2>Rick & Morty</h2>
          <button onClick={getCharacters}>Get them all!</button>
          <button onClick={reset}>Reset</button>
      {!characters ? 
        <div>
          <h2>Theres´s no characters to show</h2>
        </div>
       : 
        <div>
          
          <div className="container w-screen m-0 p-0">
            <div className="row d-flex flex-wrap  align-content-start w-screen p-0 m-0">
              {characters.map((character, index) => {
                return (
                  <div key={index} className=" col-lg-3 col-md-4  mt-3 m-0 p-1 h-100">
                    <h3>{character.name}</h3>
                    <img
                      src={character.image}
                      alt="poke-image"
                      style={{ width: "50%", height: "80%" }}
                    />
                
                          <h3>{character.id}</h3>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.type}</h3>
                    
                   
              
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
};
