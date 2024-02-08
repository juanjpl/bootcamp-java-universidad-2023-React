import { createLogin } from "../domain/login-domain"


export const toLogin = ()=>{

    
    const exec = (externalResponse) =>{
        return createLogin(
            'Carlos',
            'Lopez',
            'email@email.com',
            "https://reqres.in/img/faces/7-image.jpg",
            externalResponse.token,
        )
    }
    //firstName,lastName,email,avatar,token
   
    return exec;

    
}