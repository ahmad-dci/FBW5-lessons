import React from 'react'
import ReactDOM from 'react-dom'

// functional component
// const App = () => {
//     let lat = ''
//   window.navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       lat = position.coords.latitude
      
//     }, (error) => {
//       console.log(error);
//     },)

//     return <div>lat: {lat} </div>
// }

// class component
class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {lat: null, time: null}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                // mistake 
                // this.state.lat = position.coords.latitude

                this.setState({lat: position.coords.latitude})
            }, 
            (error) => {
                console.log(error);
            }
            )
            
            setInterval(() => {
                //console.log(new Date().toLocaleTimeString());
                this.setState({time: new Date().toLocaleTimeString() })
            }, 1000)
    }


    render(){
        return (
            <div>
                <div>Your Latitude is: {this.state.lat} </div>
                <div>now the Time is : {this.state.time}</div>
            </div>
        
        )
    }
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))