import React from 'react'
import MapComponent from '../containers/MapComponent.js'

class HomePage extends React.Component {

  render(){
    return(
      <div>
         {this.props.user ? <MapComponent user={this.props.user}/>  : "" }
      </div>
    )
  }
}

export default HomePage
