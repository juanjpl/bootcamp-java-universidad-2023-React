export const loginRepository = (urlBase) => {

  const loginEndpoint = "api/login";

  const exec = async (userName, password) => {
    const data = {
      "email": userName,
      "password": password
    };

//"https://reqres.in/api/login"


//

    const ret = await fetch(`${urlBase}/${loginEndpoint}`, {
        method: 'POST',
        headers : {"Content-Type": "application/json"} , 
      body: JSON.stringify(data),
    });

    //console.log(ret)

    if (ret.status != 200) {
      throw new Error("Username or password invalid --- Juan Lima");

      
    }

    return await ret.json();
  };

  return exec;
};
