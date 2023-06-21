import './App.css';
import ListadoPersonas from './ListadoPersonas';
import FormNuevaPersona from "./componente/FormNuevaPersona";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormNuevaPersona />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ListadoPersonas />

        
      </header>
    </div>
  );
}

export default App;
