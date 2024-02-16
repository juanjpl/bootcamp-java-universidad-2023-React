

export const getCharacters = async (url) =>{

   
    
      try {
        
        const respuestaAPI = await fetch(`${url}`);
    
        console.log(respuestaAPI.status);
        if (respuestaAPI.status >= 400 && respuestaAPI.status < 600) {
          console.log("Error en  la llamada a la API ");
          return;
        }
    
        const data = await respuestaAPI.json();
        const characters = data.results;
        const next = data.info.next;
        console.log(next)
        console.log(characters)
      
        return [ characters,next];
        /*
        characters.forEach(data => {
            allCharacters.push(data)
        });
        */
    
        
      } catch (error) {
        console.log(`"Error en  la llamada a la API desde el catch " + ${ error } ` );
      
      }
    
     
        
     
        
      
}