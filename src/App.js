import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     loggedInStatus: "NOT_LOGGED_IN",
     user: {}
  }
}


  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
       <Route exact path={"/"} render= {props => (
         <Home {...props} loggedInStatus = {this.state.loggedInStatus} />
       )} />
       <Route exact path={"/dashboard"} render= {props => (
         <Dashboard {...props} loggedInStatus = {this.state.loggedInStatus} />
       )} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
