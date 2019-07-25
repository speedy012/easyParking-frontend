import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  render(){
    return(
      <div>
      {this.props.user ?
        <div>
          <h4> Easy Parking</h4>
          <Link to="/">Home</Link>&nbsp;
          {/* <Link to="/login">Login</Link>&nbsp;*/}
          <button onClick={this.props.logout}> Log out </button>
        </div>
        :
        <div>
            <h4> Easy Parking</h4>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/login">Login</Link>&nbsp;
            <Link to="/signup">Sign up</Link>&nbsp;
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
