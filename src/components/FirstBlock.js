import React from 'react'


function FirstBlock(props) {
    const plusTemp = props.temp > 0 && '+' || '';
        return(
           <div className ='firstBlock'>
                <div className="PcityName">
                    <div className = 'cityName'>{props.cityNameRU}</div>
                </div>
                <div className = 'weather'>
                    <div className="temp">{`${plusTemp}${props.temp}${String.fromCharCode(176)}`}</div>
                    <img className="typeOfWeather" src={props.srcImg}></img>
                </div>
                <div className="PweatherTxt">
                    <div className='weatherTxt'>{props.weatherRU}</div>
                </div>
            </div>
        )
}


export default FirstBlock