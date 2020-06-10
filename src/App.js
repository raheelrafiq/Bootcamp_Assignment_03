import React from 'react';
import './App.css';
import Fruits from './fruits.js'

function App() {
  return (
    <div className="App">
      <Fruits first_fruit='Mango' second_fruit='Banana'/>
      <hr/>
      <Fruits first_fruit='Orange' second_fruit='Grapes'/>
      <hr/>
      <h1><em>React</em></h1>
    </div>
  );
}

export default App;
