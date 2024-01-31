
import { get } from "../infraestructure/fetch-user-repository";
import { singleUserAdapter } from "../infraestructure/user-adapter";

export const  getUser = async (url)=>{ //url viene desde la UI

    //dentro no busca el mismo los datos
    //delega en el "repository"

    const userExternalData = await get(url);
    const res = await userExternalData.json();
    
    const userDomain = singleUserAdapter(res);

    return userDomain;
    
    
}