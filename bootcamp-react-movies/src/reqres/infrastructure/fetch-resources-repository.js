

export const resourceRepository =  (endpoint) => {

    const exec = async ()=>{

        //const resourcesEndPoint = "api/unknown";
        const resourcesEndPoint = "api/colors";

        const response = await fetch(`${endpoint}/${resourcesEndPoint}`);

      
      
        return await response.json();
    }

    return exec;
};
