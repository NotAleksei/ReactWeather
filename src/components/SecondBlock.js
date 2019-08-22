import React from 'react'


function SecondBlock(props) {
        return(
           <div className={props.secondBlockClass}>
               <div className="wind">{`ветер: ${props.windDeg} ${props.windSpeed} м/с`}</div>
               <div className="pressure">{`давление ${props.pressure*0.75} мм.рт.ст.`}</div>
               <div className="humidity">{`влажность ${props.humidity} %`}</div>
            </div>
        )
}


export default SecondBlock