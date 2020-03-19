import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Otp from './Otp'

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
          <Route component = {Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;