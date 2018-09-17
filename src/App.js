import React, { Component } from 'react';
import './App.css';
import HomePage from './data/components/HomePage';
import {
  Route,
  Switch,
} from "react-router-dom";
import OptionsPage from './data/components/OptionsPage';
import List from './data/containers/List';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/options" component={ OptionsPage } />
          <Route exact path="/options/:option" render={ ({ match }) => (<List option={ match.params.option }/> )} />
        </React.Fragment>
    );
  }
}

export default App;