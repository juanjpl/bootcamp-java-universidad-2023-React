import { getCharacters } from "./getCharacters/getCharacters";

export const fetchMorty1 = async (url) => {
  let allCharacters = [];

  let nextUrl;

  try {
    const personajes = await getCharacters(url);

    allCharacters = [...allCharacters, ...personajes[0]];

    if (personajes[1] && personajes[1] !== null) {
      nextUrl = personajes[1];

      return allCharacters.concat(await fetchMorty1(nextUrl));
    } else {
      return allCharacters;
    }

  } catch (err) {
    console.log("Error al cargar los datos");
  }
};
