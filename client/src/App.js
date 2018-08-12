import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Api from './componets/api';
import GameBorad from './componets/GameBorad';
import SignIn from './componets/SignIn';

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Switch>
          <Route exact path="/" component={SignIn} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
