import React, { useEffect, useState } from "react";
import { toCallPokeAPI } from "../application/fetchPokemonAPI";

export const PokemonHome2 = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeAbilities, setAbilities] = useState([]);
  const [searching, setSearching] = useState(false);

  const getAll = async () => {
    setSearching(true);
    const resultado = await toCallPokeAPI();

    console.log(resultado);
    setPokeData(resultado);

    setSearching(false);

    const types = resultado.map((r) => {
      // return r.types[0].type.name
      return r.types.map((s) => s.type.name);
    });

    const abilities = resultado.map((r) => {
      // return r.types[0].type.name
      return r.abilities.map((s) => s.ability.name);
    });

    const uniquesTypes = [...new Set(types.flat().sort())];
    const uniquesAbilities = [...new Set(abilities.flat().sort())];

    //console.log(uniquesTypes);
    //console.log(uniquesAbilities);

    setPokeTypes(uniquesTypes);
    setAbilities(uniquesAbilities);
  };

  const reset = () => {
    setPokeData([]);
    setAbilities([]);
    setPokeTypes([]);
  };

  // useEffect(() => {}, [searching]);

  return (
    <div>
      <h2>Pokemons</h2>
      <button onClick={getAll}>Get them all!</button>
      <button onClick={reset}>Reset</button>
      <div className="container w-screen m-0 p-0">
        <div className="row d-flex flex-wrap  align-content-start w-screen p-0 m-0">
          {searching === true ? (
            <h2>Buscando......</h2>
          ) : pokeData.length === 0 ? (
            <h2>No Hay pokemones para mostrar </h2>
          ) : (
            <>
              {
                <div className=" row ">
                  <div className=" col-lg-3 col-md-4  mt-3 mx-auto p-1 ">
                <select name="select-type">
                  <option value="type00" selected>
                    Empty
                  </option>
                  {pokeTypes.map((type, index) => {
                    return (
                      <option value={type} key={index}>
                        {type}
                      </option>
                    );
                  })}
                </select>
                </div>
                </div>
              }
              {pokeData.map((pokemon, index) => {
                return (
                  <div
                    key={index}
                    className=" col-lg-3 col-md-4  mt-3 m-0 p-1 h-100"
                  >
                    <h3>{pokemon.name}</h3>
                    <img
                      src={
                        pokemon.sprites.other.dream_world.front_default
                          ? pokemon.sprites.other.dream_world.front_default
                          : pokemon.sprites.other["official-artwork"]
                              .front_default
                      }
                      alt="poke-image"
                      style={{ width: "50%", height: "80%" }}
                    />
                    <h4>{pokemon.id}</h4>
                    <h4>{pokemon.types[0].type.name}</h4>
                    <h4>Height: {pokemon.height}</h4>
                    <h4>Weight: {pokemon.weight}</h4>
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
