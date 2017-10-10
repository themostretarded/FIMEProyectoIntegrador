import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <li class="active"><a>Inicio</a></li>
        <li><a >Crear Mesas</a></li>
        <li><a >Borrar Mesas</a></li>
        <li><a >Modificar Mesas</a></li>
        <li><a>Ver Estadisticas del dia</a></li>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
