import PriceCompare from './main/PriceCompare.tsx';
import './App.css';
import React from 'react';

function App() {
  let props = {}
  return (
    <div className="App">
      <header className="App-header">
        <PriceCompare props={props}/>
      </header>
    </div>
  );
}

export default App;
