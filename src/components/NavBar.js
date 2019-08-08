import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js";


class NavBar extends React.Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
     this.instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
  }

  closeNav = () => {
    this.instance.close()
  }

  render(){
    let title = require('../logo_image.png')
    return(


      <div>
      {this.props.user ?
        <div>
          <img className="actual-image"src={title} alt="title"/>
          <ul id="slide-out" className="sidenav">
            <li />
            <li>
                <Link onClick={this.closeNav} to="/" className="white-text"><h6>Home</h6></Link>
            </li>
            <li>
                <div className="divider" />
            </li>
            <li onClick={this.closeNav}>
                <Link onClick={this.props.logout} to="/" className="white-text"><h6>Log Out</h6></Link>
            </li>
            <li>
                <div className="divider grey lighten-1" />
            </li>
          </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger" value="slide">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        :
        <div>
          <img className="actual-image" src={title} alt="title"/>
            <ul id="slide-out" className="sidenav">
              <li />
              <div className="home">
              <li className="sub-home">
                  <Link onClick={this.closeNav} to="/" className="white-text"><h6 className="home-title">Home</h6></Link>
              </li>
              <li>
                  <div className="divider grey lighten-1" />
              </li>
              </div>
              <div className="login">
              <li className="sub-login">
                  <Link onClick={this.closeNav} to="/login" className="white-text"><h6 className="login-title">Login</h6></Link>
              </li>
              <li>
                  <div className="divider grey lighten-1" />
              </li>
              </div>
              <div className="signup">
              <li className="sub-signup">
                  <Link onClick={this.closeNav} to="/signup" className="white-text"><h6 className="signup-title">Sign Up</h6></Link>
              </li>
              <li>
                  <div className="divider grey lighten-1" />
              </li>
              </div>
            </ul>
            <Link to="#" data-target="slide-out" className="sidenav-trigger" value="menu">
                <i className="material-icons">menu</i>
            </Link>
            </div>
      }
      </div>
    )
  }
}




export default NavBar


// <div className="nav-wrapper">
//   <img className="actual-image" src={title} alt="title"/>
//   <Link className="white-text" to="/">Home</Link>&nbsp;<br/>
//   <Link className="white-text" to="/login">Login</Link>&nbsp;<br/>
//   <Link className="white-text" to="/signup">Sign up</Link>&nbsp;
// </div>




// state = {
//   isLogin: false
// }

// componentDidMount() {
//   if (localStorage.token) {
//     this.setState({isLogin: true})
//   } else
//
// }

// handleLogout = () => {
//   delete localStorage.token
//   this.setState({isLogin: false})
//   return <Redirect to="/" />
// }

// inOrOut = () => {
//   if (this.state.isLogin) {
//     return (
//       <div>
//         <h4> Easy Parking</h4>
//         <Link to="/">Home</Link>&nbsp;
//         {/* <Link to="/login">Login</Link>&nbsp;*/}
//         <button onClick={this.handleLogout}> Log out </button>
//       </div>
//     )
//   } else {
//       return(
//         <div>
//             <h4> Easy Parking</h4>
//             <Link to="/">Home</Link>&nbsp;
//             <Link to="/login">Login</Link>&nbsp;
//             <Link to="/signup">Sign up</Link>&nbsp;
//         </div>
//       )
//   }
//
// }

// inOrOut = () => {
//
// }
