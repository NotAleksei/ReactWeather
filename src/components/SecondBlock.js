import React from 'react'
import '../index.css'

class SecondBlock extends React.Component {
    render(){
        return(
           <div id="secondBlockSpb">
               <div className="wind">{`ветер: ${this.props.windSpeed} м/с`}</div>
               <div className="pressure">{`давление ${this.props.pressure*0.75} мм.рт.ст.`}</div>
               <div className="humidity">{`влажность ${this.props.humidity} %`}</div>
            </div>
        )
    }
}


export default SecondBlock