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
      <div className="signup-form">
        <form onSubmit={this.handleSignUp}>
          <div className="row">
             <div className="col s12">
               <div className="row">
                 <div className="input-field col s12">
                   <i className="material-icons prefix">account_circle</i>
                   <input onChange={this.handleChange} name="username" type="text" id="autocomplete-input" placeholder="Username" className="autocomplete white-text" />
                   {/*}<label for="username-input">Username</label>*/}
                 </div>
                 <div className="input-field col s12">
                   <i className="material-icons prefix">email</i>
                   <input onChange={this.handleChange} name="email" type="text" id="autocomplete-input" placeholder="Email" className="autocomplete white-text" />
                 </div>
                 <div className="input-field col s12">
                   <i className="material-icons prefix">https</i>
                   <input onChange={this.handleChange} name="password" type="text" id="autocomplete-input" placeholder="Password" className="autocomplete white-text" />
                 </div>
                 < div className="signup-btn">
                   <input className="inside-signup-btn" type="submit" value="Sign Up"/>
                 </div>
               </div>
             </div>
           </div>
        </form>
      </div>
    )
  }

}

export default SignUpPage

// // {/*<form onSubmit={this.handleSignUp}>
//   <input onChange={this.handleChange} className="white-text" type="text" name="username" placeholder="Username"/> <br/>
//   <input onChange={this.handleChange} className="white-text" type="text" name="email" placeholder="Email"/> <br/>
//   <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/> <br/>
//   {/* <input type="submit" value="Sign Up"/>*/}
//   // <button class="btn waves-effect waves-light" type="submit" name="action"> Sign Up
//   //   <i class="material-icons right">send</i>
//   // </button>
//
//
//
//</form>*/}//
