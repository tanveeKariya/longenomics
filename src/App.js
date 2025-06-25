import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage />
    </div>
  </BrowserRouter>
    
  );
}

export default App;
