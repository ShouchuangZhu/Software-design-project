import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Quote from './components/Quote';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
