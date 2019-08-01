import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

class LoginPage extends React.Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems);
  }

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
    <div className="login-form">
      <form onSubmit={this.handleLogin}>
        <div class="row">
           <div class="col s12">
             <div class="row">
               <div class="input-field col s12">
                 <i class="material-icons prefix">account_circle</i>
                 <input onChange={this.handleChange} name="username" type="text" id="autocomplete-input" placeholder="Username" className="autocomplete white-text" />
                 {/*}<label for="username-input">Username</label>*/}
               </div>
               <div class="input-field col s12">
                 <i class="material-icons prefix">email</i>
                 <input onChange={this.handleChange} name="email" type="text" id="autocomplete-input" placeholder="Email" className="autocomplete white-text" />
               </div>
               <div class="input-field col s12">
                 <i class="material-icons prefix">https</i>
                 <input onChange={this.handleChange} name="password" type="text" id="autocomplete-input" placeholder="Password" className="autocomplete white-text" />
               </div>
               < div className="login-btn">
                 <input type="submit" value="Log In"/>
               </div>
             </div>
           </div>
         </div>
      </form>
    </div>
    )
  }
}




export default LoginPage
