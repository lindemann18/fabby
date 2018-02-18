import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './general/containers/header-container';
import {Switch,Route} from 'react-router-dom';
import MainContainer from './pages/containers/main-container';
import AboutContainer from './pages/containers/about-container';
import AboutMeContainer        from './pages/containers/about-me-container';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/_index.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <HeaderContainer />
          <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/aboutme" component={AboutMeContainer} />
            <Route path="/" component={MainContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
