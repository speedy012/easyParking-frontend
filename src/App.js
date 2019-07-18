import React from 'react';
import LoginPage from './components/LoginPage.js'
import SignUpPage from './components/SignUpPage.js'
import HomePage from './components/HomePage.js'
import NavBar from "./components/NavBar.js"
import { Switch, Route } from 'react-router-dom'

import './App.css';

class App extends React.Component{

  state= {
    user: {}
  }

  // check if user is login (if there is a token)
  //get me user info
  componentDidMount() {
    if (!!localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': localStorage.getItem("token")
        }
      }).then(resp => resp.json())
      .then(user => {
        this.setState({user: user})
      })
    }
  }

  render() {
    console.log(this.state.user)
    return(
      <div>
        <NavBar user={this.state.user}/>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/" render={(routerProps) => {
            return <HomePage user={this.state.user}/>
            }}
            />
        </Switch>
      </div>
    )
  }
}

export default App;

/*
<Route exact path="/login" render={routerProps => <LoginPage {...routerProps}/>}/>
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
  */
