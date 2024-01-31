import { toUser } from "../domain/user";


export const singleUserAdapter = (externalData) =>{

    const{first_name,last_name,email,avatar} = externalData.data;

    return toUser(first_name,last_name,email,avatar);
}