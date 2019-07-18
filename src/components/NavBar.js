import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class NavBar extends React.Component {
  state = {
    isLogin: false
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({isLogin: true})
    }
  }

  handleLogout = () => {
    delete localStorage.token
    this.setState({isLogin: false})
    return<Redirect to="/" />
  }

  inOrOut = () => {
    if (!!this.state.isLogin) {
      return (
        <div>
          <h4> Easy Parking</h4>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/login">Login</Link>&nbsp;
          <button onClick={this.handleLogout}> Log out </button>
        </div>
      )
    } else {
        return(
          <div>
              <h4> Easy Parking</h4>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/login">Login</Link>&nbsp;
              <Link to="/signup">Sign up</Link>&nbsp;
          </div>
        )
    }

  }

  render(){
    return(
      <div>
      {this.inOrOut()}
      </div>
    )
  }

}

export default NavBar
