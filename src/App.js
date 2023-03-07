import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import LogofreeCodeCamp from './componentes/Logofreecodecamp.jsx';


function App() {
  return (
    <div className="aplicacion-tareas">
      < LogofreeCodeCamp />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
