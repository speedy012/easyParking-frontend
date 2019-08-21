import React from 'react';
import LoginPage from './components/LoginPage.js'
import SignUpPage from './components/SignUpPage.js'
import HomePage from './components/HomePage.js'
import NavBar from "./components/NavBar.js"
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

class App extends React.Component{

  state= {
    user: null
  }

  logout = () => {
    this.setState({user: null})
    localStorage.removeItem("token")
    return <Redirect to="/" />
  }

 userState = (data) => {
   this.setState({ user: data})
 }

  // check if user is login (if there is a token)
  //get me user info
  componentDidMount() {
    if (!!localStorage.token) {
      fetch('https://easy-parking-backend.herokuapp.com/profile', {
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

    return(
      <div>
        <NavBar user={this.state.user} logout={this.logout}/>
        <Switch>
          <Route exact path="/login" render={(props) => {
            return <LoginPage userState={this.userState} {...props}/>}}
            />

          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/" render={(props) => {
            return <HomePage user={this.state.user}/>
            }}
            />
        </Switch>
      </div>
    )
  }
}

export default App;
