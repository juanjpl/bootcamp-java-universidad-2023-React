import { useEffect } from "react"


export function UserDetails({user}=props){

    useEffect(()=>{
        return ()=>{console.log('componente destruido!')}
    },[])

    return(
        <>
        <br />
        <label>Name:</label>{user.name}
        <br />
        <label>Last Name:</label>{user.last_name}
        <br />
        <label>Email:</label>{user.email}
        <br />
        <img src={user.avatar} alt="avatar-image" />
        
        </>
    )
}