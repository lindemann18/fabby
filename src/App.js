import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './general/containers/header-container';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch,Route} from 'react-router-dom';
import MainContainer from './pages/containers/main-container';
import AboutContainer from './pages/containers/about-container';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/" component={MainContainer} />
      </Switch>
      </div>
    );
  }
}

export default App;
