import React from 'react'
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import '../index.css'

class City extends React.Component {

    render(){
        return(
            <div id = 'Spb'>
                <div className='showSub'>
                   <FirstBlock 
                        temp = {this.props.temp} 
                        weatherName = {this.props.weatherName} 
                        weatherID = {this.props.weatherID} 
                        srcImg = {this.props.srcImg}
                        weatherRU = {this.props.weatherRU}
                   /> 
                   <SecondBlock 
                       windSpeed = {this.props.windSpeed}
                       windDeg = {this.props.windDeg}
                       pressure = {this.props.pressure}
                       humidity = {this.props.humidity}/>
                </div>
            </div>
        )
    }
}


export default City