import React from 'react';
import chalk_slug from '../../assets/chalk_slug.png'
import './App.css';

function App() {
  return (
    <main className="App">
      <img className="App-Logo" src={chalk_slug} alt='a chalk slug'/>
    </main>
  );
}

export default App;

// give something else the className App-Logo