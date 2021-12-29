import React from 'react';
import './App.css';
import Bio from './Bio';
import BusinessAnalysis from './BusinessAnalysis';
import Contact from './Contact';
import Development from './Development';
import Security from './Security';
import QA from './QA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<a href="#Bio">Bio</a>
        <a href="#BusinessAnalysis">Analysis</a>
        <a href="#Development">Development</a>
        <a href="#QA">QA</a>
        <a href="#Security">Security</a>
        <a href="#Contact">Contact</a>*/}
        Minh
        <i>Last Updated 12/29/2021</i>
      </header>
      <Bio />
      <BusinessAnalysis />
      <Development />
      <QA />
      <Security />
      <Contact />
    </div>
  );
}

export default App;
