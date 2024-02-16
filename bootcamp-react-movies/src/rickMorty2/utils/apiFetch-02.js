import { getCharacters } from "./getCharacters/getCharacters";

export const fetchMorty1 = async (url) => {
  let allCharacters =[] ;
  // Set a variable for the next page url
  let nextUrl;

  try {
    // Fetch request and parse as JSON
    const personajes = await getCharacters(url);

    //console.log(personajes);
     // create a storage array
     allCharacters = [...allCharacters, ...personajes[0]];
     //console.log(allCharacters);

    if (personajes[1] && personajes[1] !== null) {
      nextUrl = personajes[1];
      
      return allCharacters.concat(await fetchMorty1(nextUrl));
    } else{
      
      return  allCharacters;
    }
      
    
   
    // break recursion
    //console.log(allCharacters)
  } catch (err) {
    console.log("Error al cargar los datos");
  }
 
 

};
