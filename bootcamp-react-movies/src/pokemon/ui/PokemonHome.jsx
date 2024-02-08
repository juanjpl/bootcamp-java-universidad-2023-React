import React, { useState } from "react";

export const PokemonHome = () => {

    const [pokeData,setPokeData] = useState([]);

  const getThemAll = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let promisesArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then((data) =>
        this.setState({ pokemon: data }, () =>
          console.log("Main Pokemon State: ", this.state.pokemon)
        )
      );
  };

  const getAll = () => {
    setPokeData([])
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon);
        })
      
      });
     
     
  };

  const  fetchPokemonData = async(pokemon)=> {
   
    let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    const resultados =fetch(url)
      .then((response) => response.json())
      .then(function (pokeDatas) {
        //console.log(pokeDatas)
        setPokeData(pokeData => [...pokeData,pokeDatas])
       
          })
      
     
   
     
  }

  const reset =()=>{
    setPokeData([]);
  }
  return (
    <div>
      <h2>Pokemons</h2>
      <button onClick={getAll}>Get them all!</button>
      <button onClick={reset}>Reset</button>
      <div className="container w-screen m-0 p-0">
        <div className="row d-flex flex-wrap  align-content-start w-screen p-0 m-0">
          

          {pokeData.length===0 ? (
            <h2>No Hay pokemones para mostrar </h2>
          ) : (
           <>
          
            {pokeData.map((pokemon, index) => {
                return (
                  <div key={index} className=" col-lg-3 col-md-4  mt-3 m-0 p-1" >
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.other.dream_world.front_default
                    } alt="poke-image" style={{width:"50%" , height:"80%"}} />
                  
                  </div>
                );
              })}
    
             
           </>
          )}

         
        </div>
      </div>
    </div>
  );
};
