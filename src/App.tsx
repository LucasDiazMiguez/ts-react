import { Contador } from "./components/Contador";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";


const App = () => {
  return (
    <div className='mt-2'>
      <h1> Intriducción a TS_ react</h1>
      <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <Login />
      <Usuarios />
    </div>
  )
}
export default App;