import './App.css';
import Acordeon from './component/acordeon/acordeon';


function App() {
  console.log('App')
  let data = [
          { id:1, titulo:"javascript",descripcion:"lenguaje de programacion"},
          { id:2, titulo:"react",descripcion:"libreria para crear componentes reactivos"},
          { id:3, titulo:"html",descripcion:"lenguaje de maquetacion"},
          { id:4, titulo:"css",descripcion:"lenguaje para dar estilo a tu pagina"}
        ];
  return (
    <div>
      <header>
          <h1>Aprendiendo React</h1>
          <h2>Armando acordeones desde 0</h2>
          
          < Acordeon data = {data} />

      </header>
    </div>
  );
}

export default App;
