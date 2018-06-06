import React, { Component } from 'react';
import './App.css';
import Footer from './Pages/Footer/Footer'

import Nav from './Pages/components/nav';
import Header from './Pages/Header/Header';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
