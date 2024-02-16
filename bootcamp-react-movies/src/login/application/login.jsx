


export const login =(repository , adapter)=>{


    const exec = async (userName, password) =>{

        const response = await repository(userName, password);

        //puedo adaptar la respuesta
        const adapted = adapter(response);

        return adapted; 
    }

    return exec;
}