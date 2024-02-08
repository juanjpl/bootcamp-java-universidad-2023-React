import { toLogin } from "../infrastructure/login-adapter";


export const login =(repository , adapter)=>{


    const exec = async (username, password) =>{

        const response = await repository(username, password);

        //puedo adaptar la respuesta
        const adapted = adapter(response);

        return adapted;
    }

    return exec;
}