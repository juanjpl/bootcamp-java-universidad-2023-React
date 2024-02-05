import { appConfig } from "../../config";

export const resourceRepository = async (endpoint) => {

    const exec = async ()=>{

        const resourcesEndPoint = "api/unknown";
        const response = await  fetch(`${endpoint}/${resourcesEndPoint}`);
      
        return await response.json();
    }

    return exec;
};
