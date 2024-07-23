import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
