// src/App.js
import React from 'react';
import PersonalInfo from '.PersonalInfo';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import './App.css';

function App() {
  return (
    <div class name="App">
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;