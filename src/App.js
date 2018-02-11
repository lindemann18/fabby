import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './general/containers/header-container';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
      </div>
    );
  }
}

export default App;
