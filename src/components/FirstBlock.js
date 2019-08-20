import React from 'react'


class FirstBlock extends React.Component {

    render(){
        const plusTemp = this.props.temp > 0 && '+'
        return(
           <div className ='firstBlock'>
                <div className="PcityName">
                    <div className = 'cityName'></div>
                </div>
                <div className = 'weather'>
                    <div className="temp">{`${plusTemp}${this.props.temp}${String.fromCharCode(176)}`}</div>
                    <img className="typeOfWeather" src={this.props.srcImg}></img>
                </div>
                <div className="PweatherTxt">
                    <div className='weatherTxt'>{this.props.weatherRU}</div>
                </div>
            </div>
        )
    }
}


export default FirstBlock