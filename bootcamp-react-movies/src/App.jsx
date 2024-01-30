import { useState } from "react";
import "./App.css";
import { getPersona, getValor } from "./app-utils/app-utils";
import Auto from "./app-utils/app-utils";

/*App es la funcion ( componente ) principal, o que se carga primero */

function App({datos}) {
//desestructuring


console.log(datos);


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
    </>
  );
}

export default App;
