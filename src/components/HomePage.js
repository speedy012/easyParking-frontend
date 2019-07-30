import React from 'react'
import MapComponent from '../containers/MapComponent.js'

class HomePage extends React.Component {




  render(){
    console.log("in homepage", this.props.user)
    // console.log("after lat/long",typeof(this.state.userLong))
    // console.log("in hp, user:", this.props.user)
    return(
      <div>
         {this.props.user ? <MapComponent user={this.props.user}/>  : "" }
      </div>
    )
  }
}

export default HomePage
