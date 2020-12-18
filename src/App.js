import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Bio from './Bio';
import Skills from './Skills';
import Contact from './Contact';
import Certifications from './Certifications';
import Security from './Security';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Minh <i>Last Updated 12/18/2020</i>
      </header>
      <Welcome />
      <Bio />
      <Skills />
      <Security />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
