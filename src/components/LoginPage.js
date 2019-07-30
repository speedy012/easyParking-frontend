import React from 'react'

class LoginPage extends React.Component {

  state= {
    username: '',
    email: '',
    password: ''
  }

  // if there is a token...we want to redirect to index
  // componentDidMount() {
  //   if(!!localStorage.getItem("token")) {
  //     this.props.history.push("/index")
  //   }
  // }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleLogin = (event) => {
    event.preventDefault()
    console.log("state from handleLogin",this.state)
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        console.log("inlogin:", data)
        localStorage.setItem('token', data.token)
        this.props.history.push("/")
        //set user state
        this.props.userState(data.user)
      })
  }

  render(){
    console.log(this.state)
    return (
      <form onSubmit={this.handleLogin}>
        <input onChange={this.handleChange} className="black-text"type="text" name="username" placeholder="Username"/> <br/>
        <input onChange={this.handleChange} className="black-text"type="text" name="email" placeholder="Email"/> <br/>
        <input onChange={this.handleChange} type="password" name="password" placeholder="Password" /> <br/>
        <input type="submit" value="Log In"/>
      </form>
    )
  }


}

export default LoginPage
