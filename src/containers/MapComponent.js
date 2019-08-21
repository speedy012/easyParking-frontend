import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const API_KEY = process.env.REACT_APP_MB_KEY

var myIcon = L.icon({

  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII',
  // iconUrl: "red.png",
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [0, -30]
});

var geo = L.icon({
  iconUrl: require('../red.png'),
  iconSize: [40,50]

  // iconAnchor: [10, 30],
  // popupAnchor: [0, -30]
})

class MapComponent extends React.Component {

  state = {
    userLat: 40.76,
    userLong: -73.98,
    isCurrentLocation: false,
    zoom: 13,
    availableParking: [],
    draggable: true,
    newLat: null,
    newLong: null
  }

  toggleDraggable = () => {
    this.setState({toggleDraggable: !this.state.draggable})
  }

  updateMarker = (e, pinnedSpot) => {
    if (this.props.user.id === pinnedSpot.user_id) {
      const updatedCoords = e.target.getLatLng()

      fetch(`https://easy-parking-backend.herokuapp.com/update/${pinnedSpot.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.user.id,
          latitude: updatedCoords.lat.toString(),
          longitude: updatedCoords.lng.toString(),
          id: pinnedSpot.id
        })
      })
      .then(res => res.json())
      // .then(data => console.log('new long', data.longitude) )
      .then(data => {
        let newUpdatedSpot = this.state.availableParking.map(oldSpot => {
          if (oldSpot.id === data.id) {
            return data
          }
          else {
            return oldSpot
          }
        })

        this.setState({
          availableParking: [...newUpdatedSpot]
        })
      })
    } else {
      alert("Wrong user")
    }
  }


  addMarkers = (e) => {
    this.setState({
      newLat: e.latlng.lat,
      newLong: e.latlng.lng
    })

    fetch("https://easy-parking-backend.herokuapp.com/currentlocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        latitude: this.state.newLat,
        longitude: this.state.newLong
      })
    })
    .then(res => res.json())
    .then(newSpot =>{
      this.setState({ availableParking: [...this.state.availableParking, newSpot]})
    })
  }

  removeMarker = (pkSpot) => {
    let claimedParkingSpot = this.state.availableParking.filter(pk => pk.id !== pkSpot.id)
    this.setState({
      availableParking: claimedParkingSpot
    })

    fetch(`http://localhost:3000/delete/${pkSpot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        id: pkSpot.id
      })
    })
  }

  userLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLat: position.coords.latitude.toString(),
        userLong: position.coords.longitude.toString(),
        isCurrentLocation: true
      }, () => {
        return (
           fetch("http://localhost:3000/currentlocation", {
             method: "POST",
             headers: {
               "Content-Type": "application/json"
             },
             body: JSON.stringify({
               user_id: this.props.user.id,
               latitude: this.state.userLat,
               longitude: this.state.userLong
             })
           })
           .then(res => res.json())

           .then(console.log)

        )
      })
    })
  }

  componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     console.log("before", typeof(position.coords.latitude))
  //     this.setState({
  //       userLat: position.coords.latitude.toString(),
  //       userLong: position.coords.longitude.toString()
  //     })
  //   })


    fetch("http://localhost:3000//allparkingspots")
      .then(res => res.json())
      .then(list => {
        this.setState({
          availableParking: list
      })
    })
  }
  render() {
    const position = [this.state.userLat, this.state.userLong]
    const spots = this.state.availableParking.map(spot => {
      let list = [spot.latitude, spot.longitude]
      if(this.props.user.id === spot.user_id) {
        return (
          <Marker onDragend={(e) =>this.updateMarker(e, spot)} position={list} icon={myIcon} key={spot.id}  draggable={this.state.draggable}>
            <Popup>
              <span className="popup" onClick={this.toggleDraggable} >
                Open Parking Space <br /> <button className="popup-btn" onClick={()=>this.removeMarker(spot)}>Claim</button>
              </span>
            </Popup>
          </Marker>
        )
      } else {

          return (
            <Marker onDragend={(e) =>this.updateMarker(e, spot)} position={list} icon={myIcon} key={spot.id}  >
              <Popup>
                <span className='popup' onClick={this.toggleDraggable} >
                  Open Parking Space <br /> <button className="popup-btn" onClick={()=>this.removeMarker(spot)}>Claim</button>
                </span>
              </Popup>
            </Marker>
          )
        }
    })


    return(
      <div className="map-container">
        <div className="inner-map-container">
          <button className="location-btn white-text"  onClick={this.userLocation}>Get Location</button>

        <Map onClick={this.addMarkers} className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

            url={`https://api.mapbox.com/styles/v1/rustyraptor/cjkbednp4buod2rnwog2xrdtb/tiles/256/{z}/{x}/{y}?access_token=${API_KEY}`}

          />
          {spots}
          {this.state.isCurrentLocation ?
            <Marker  position={position} icon={geo}>
              <Popup className="popup">
                <span className="personal">
                  My Current Location <br />
                </span>
              </Popup>
            </Marker>
            :
          null
          }
        </Map>
        </div>
      </div>
    )
  }
}

export default MapComponent
