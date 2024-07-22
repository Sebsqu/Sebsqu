import './App.css';
import React, { useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
