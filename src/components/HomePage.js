import React from 'react'

class HomePage extends React.Component {

  state = {
    userLat: "",
    userLong: ""
  }

  userLocation = () => {
    console.log("in")
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      // this.setState({
      //   userLat: position.coords.latitude.toString(),
      //   userLong: position.coords.longitude.toString()
      // }, ()=> {
      //   return (
      //     fetch("http://localhost:3000/currentlocation", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json"
      //       },
      //       body: JSON.stringify({
      //         user_id: this.props.user.id,
      //         latitude: this.state.userLat,
      //         longitude: this.state.userLong
      //       })
      //     })
      //     .then(res => res.json())
      //     .then(console.log)
      //   )
      })
    // })


  }


  render(){
    console.log("after lat/long",typeof(this.state.userLong))
    console.log("in hp, user:", this.props.user)
    return(
      <div>
      <p>home</p>
      <button onClick={this.userLocation}>Get Location</button>
      </div>
    )
  }
}

export default HomePage
