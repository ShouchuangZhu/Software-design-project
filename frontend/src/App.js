import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Quote />
    </div>
  );
}

export default App;
