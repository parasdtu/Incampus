import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Otp from './Otp';
import Profile from './Profile';

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route
              exact
              path="/otp"
              component = {Otp}
            />
          <Route 
            exact 
            path = "/profile"
            component = {Profile}
          />
          <Route component = {Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;