

export const resourceRepository =  (endpoint,alternative) => {

    const exec = async ()=>{

        //const resourcesEndPoint = "api/unknown";
        console.log(endpoint)
        console.log(alternative)

        const resourcesEndPoint = "character";

    

        const response = await fetch(!alternative ? `${endpoint}/${resourcesEndPoint}`:alternative);
             

      
      
        return await response.json();
    }

    return exec;
};
