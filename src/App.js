import './App.css';
import React from 'react';
import MainMenu from './componentes/MainMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import ProductosScreen from './screens/ProductosScreen';
import TareasScreen from './screens/TareasScreen';

function App() {
  return (
    <Router>
      <MainMenu/>
      <Switch>

      <Route path="/about">
        <AboutScreen />
      </Route>
      <Route path="/productos">
        <ProductosScreen />
      </Route>
      <Route path="/tareas">
        <TareasScreen />
      </Route>
      
      <Route path="/">
        <HomeScreen />
      </Route>
      
    </Switch>
    </Router>
    
  );
}

export default App;
