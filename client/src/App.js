import React, { Component } from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
// import handleLogout from './components/Home/Home'
import Trainer from './pages/Trainer';
import Admin from './pages/Admin';
import Login from './components/Login/Login';
import './components/style/style.css'


class App extends Component { // Write as class
  // State goes here = {token: ''}
  state = {
    token: '',
    loggedin: false
  };

  storeToken = (token) => {
    // setState with token
    // console.log(token)
    this.setState({
      token: token,
      loggedin:true
    })
  }

  // clearToken = (token) => {
  //   this.setState({
  //     token: ''
  //   })
  // }

  logOut = () => {
    this.setState({
      loggedin: false,
      token: ''
    })
  }

  render() {
    return (
      <Router>
        {/* Pass token from state */}
        < Nav token={this.state.token} logOut={this.logOut} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" render={() => <Home loggedin={this.state.loggedin}  storeToken={this.storeToken} />} />
          <Route path="/logout" render={() => <Home loggedin={this.state.loggedin}  storeToken={this.storeToken} />} />
          <Route path="/trainer" component={Trainer} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </Router >
    )
  }

}

  export default App;
