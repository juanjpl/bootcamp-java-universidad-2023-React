
import { Provider } from "react-redux";
import "./App.css";
import EcommerceStore from "./redux/store";
import { AppRouter } from "./AppRouter";
import "/node_modules/primeflex/primeflex.css";

/*App es la funcion ( componente ) principal, o que se carga primero */

function App() {
 

  return (
    <>
      {/* agregamos un nuevo componente 
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
      {/* agregamos un nuevo componente *
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
*/}

      <Provider store={EcommerceStore}>
        <AppRouter></AppRouter>
      </Provider>
    </>
  );
}

export default App;
