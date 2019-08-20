import React from 'react'

class SecondBlock extends React.Component {
    render(){
        return(
           <div id="secondBlockSpb">
               <div className="wind">{this.props.windSpeed}</div>
               <div className="pressure">{this.props.pressure}</div>
               <div className="humidity">{this.props.humidity}</div>
            </div>
        )
    }
}


export default SecondBlock