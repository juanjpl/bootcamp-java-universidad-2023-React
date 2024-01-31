import { useState } from "react";
import "./App.css";
import { getPersona, getValor } from "./app-utils/app-utils";
import Auto from "./app-utils/app-utils";
import MyfirstButton from "./user/create/ui/Button";
import { getUser } from "./user/get/application/get-user";
import { UserDetails } from "./user/user-ui/ui/UserDetails";

/*App es la funcion ( componente ) principal, o que se carga primero */

function App() {

  const[user, setUser] = useState(undefined); 

const get = async(e) =>{

  //debugger;
  const url = "https://reqres.in/api/users/2";
  const user = await getUser(url);
  console.log(user);
  setUser(prev=> user);
}

const resetUser =()=>{
  setUser(prev => undefined);
}


  const [valor, setValor] = useState(getValor);
  //definir otro estado pero con un objeto

  const [persona, setPersona] = useState(getPersona);

  const cambiarValor = (nuevoValor) => {
    setValor(nuevoValor);
    console.log(nuevoValor);
  };

  const sumar = () => {
    setValor((prev) => prev + 1);
  };

  const restar = () => {
    setValor((prev) => prev - 1);
  };

  const mostrarEstado = () => {
    alert(valor);
    alert(JSON.stringify(persona));
  };

  const guardarPersona = () => {
    localStorage.setItem(
      "app",
      JSON.stringify({
        valor,
        persona: persona,
      })
    );
  };

  const guardarEstado = () => {
    localStorage.setItem(
      "app",
      JSON.stringify({
        valor,
        persona: persona,
      })
    );
  };

  const acelerarAuto =()=>{
    const nuevoAuto = new Auto('Pirulo');
    nuevoAuto.acelerar();
  }

  return (
    <>
      <h1>Juan lima</h1>
      <input value={valor} onChange={(e) => cambiarValor(e.target.value)} />
      <hr />
      <button onClick={() => setValor((prev) => prev + 1)}>+</button>

      <button onClick={() => setValor((prev) => prev - 1)}>-</button>
      <hr />
      <button onClick={() => setPersona({ id: 100, nombre: "Juan" })}>
        Cargar Persona
      </button>
      <button  onClick={() => setPersona({  })}>
        Borrar Persona
      </button>
      {JSON.stringify(persona)}

      <hr />
      <button onClick={mostrarEstado}>Mostrar Estado</button>
      <button onClick={guardarPersona}>Guardar Persona</button>
      <hr />
      <button onClick={acelerarAuto}>Acelerar</button>
      {/* agregamos un nuevo componente */}
      <MyfirstButton
       name={"Get User"} click={get}/>
      <MyfirstButton name={"Set User"} click={resetUser}/>

<hr />
{
  user?
  <UserDetails user={user}/>
  :
  <h1>Primero busque un user....</h1>
}
     

    </>
  );
}

export default App;
