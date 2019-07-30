import React from 'react'


class SignUpPage extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  }


  // if there is a token...we want to redirect to index
  // componentDidMount() {
  //   if(!!localStorage.getItem("token")) {
  //     this.props.history.push("/index")
  //   }
  // }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSignUp= (event) => {
    event.preventDefault()
    console.log("state from handleLogin",this.state)
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        this.props.history.push("/login")
      })
  }

  render(){
    console.log(this.state)
    return (
      <form onSubmit={this.handleSignUp}>
        <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/> <br/>
        <input onChange={this.handleChange} type="text" name="email" placeholder="Email"/> <br/>
        <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/> <br/>
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }

}

export default SignUpPage
