// primera forma de importar
// import Testimonio from './componentes/testimonio';
// segunda forma de importar

import {Testimonio} from './componentes/testimonio';

import Nav from './componentes/nav';

import './App.css';
// ./ significa que apartir de la carpeta donde se encuentra App.js se dirija a la siguiente ruta

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <div className="box">
        <h2>Bienvenidos a mi proyecto :)</h2>
        <Testimonio />
      </div> */}
    </div>
  );
}

export default App;
