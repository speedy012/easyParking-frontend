import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


class NavBar extends React.Component {


  render(){
    let title = require('../title.png')
    return(


      <div>
      {this.props.user ?
        <div className="nav-wrapper">
          <h4> Easy Parking</h4>
        <ul  class="right hide-on-med-and-down">
          <li><Link className="black-text" to="/">Home</Link>&nbsp;</li>
          {/* <Link to="/login">Login</Link>&nbsp;*/}
          <li> <button className="waves-effect waves-light btn-small"onClick={this.props.logout}> Log out </button></li>
        </ul>
        </div>
        :
        <div className="nav-wrapper">
          <div  className="title" >
            <img src={title} alt="title"/>
            <Link className="black-text" to="/">Home</Link>&nbsp;
            <Link className="black-text" to="/login">Login</Link>&nbsp;
            <Link className="black-text" to="/signup">Sign up</Link>&nbsp;
          </div>
        </div>
      }
      </div>
    )
  }
}

export default NavBar

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
