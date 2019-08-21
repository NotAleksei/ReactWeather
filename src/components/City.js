import React from 'react'
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';


class City extends React.Component {


    state= {
        temp: undefined,
        sunrise: undefined,
        sunset: undefined,
        windSpeed: undefined,
        windDeg: undefined,
        pressure: undefined,
        humidity: undefined,
        weatherName: undefined,
        weatherID: undefined,
        srcImg: undefined,
        weatherRU: undefined,
        cityName: undefined,
        cityNameRU: undefined,
        secondBlockClass: undefined
      }
    
      getWeather = async (id) => {

        const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=6c3d280ee9986f8ae6a7e9b49154cd8c`)
        const weather = await url.json();
        let cityName;
        let secondBlockClass;
        let cityNameRU;
        
        if(id === '498817'){
            cityName = 'Spb';
            cityNameRU = 'Санкт-Петербург';
            secondBlockClass = 'secondBlockSpb';
        }else if(id === '524901'){
            cityName = 'Moscow';
            cityNameRU = 'Москва';
            secondBlockClass = 'secondBlock';
        }else if(id === '551487'){
            cityName = 'Kazan';
            cityNameRU = 'Казань';
            secondBlockClass = 'secondBlock';
        } else if(id === '2013348'){
            cityName = 'Vladivostok';
            cityNameRU = 'Владивосток';
            secondBlockClass = 'secondBlock';
        }

        const getTemp = Math.round((weather.main.temp-273).toFixed(2))
        const getDateSunrise = new Date(weather.sys.sunrise*1000);
        const getDateSunset = new Date(weather.sys.sunset*1000);
        const date = new Date();
        const getWindSpeed = weather.wind.speed;
        const getWindDeg = weather.wind.deg;
        const getPressure = Math.round(weather.main.pressure);
        const getHumidity = Math.round(weather.main.humidity);
    
        const getWeatherName = weather.weather[0].main;
        const getWeatherID = weather.weather[0].id;
        let setSrcImg = undefined;
        let setWeatherRU = undefined;
    
        if (getWeatherID > 800 || getWeatherID < 700 ) {
          setSrcImg = require(`../img/${getWeatherName}.png`);
          }
    
        if(getWeatherName === 'Clear' && date < getDateSunset && date > getDateSunrise){
          setWeatherRU = 'ясно';
          setSrcImg = require('../img/Sun.png');
        } else if((getWeatherName === 'Clear' && date > getDateSunset && date < getDateSunrise) || 
        (date < getDateSunset && date < getDateSunrise) || (date > getDateSunset && date > getDateSunrise) ){
          setWeatherRU = 'ясно';
          setSrcImg = require('../img/Moon.png');
        }else if(getWeatherName === 'Clouds'){
          setWeatherRU = 'облачно';
        } else if(getWeatherName === 'Rain' || weather === 'Drizzle'){
          setWeatherRU = 'дождь';
        } else if(getWeatherName === 'Thunderstorm'){
          setWeatherRU = 'гроза';
        } else if(getWeatherName === 'Snow'){
          setWeatherRU = 'снег';
        } else if(getWeatherID >= 700 && getWeatherID < 800 ){
          setWeatherRU = 'туман';
          setSrcImg = require('../img/Atmosphere.png');
        };
    
    
        this.setState ({
          temp: getTemp,
          sunrise: getDateSunrise,
          sunset: getDateSunset,
          windSpeed: getWindSpeed,
          windDeg: getWindDeg,
          pressure: getPressure,
          humidity: getHumidity,
          weatherName: getWeatherName,
          weatherID: getWeatherID,
          srcImg: setSrcImg,
          weatherRU: setWeatherRU,
          cityName: cityName,
          cityNameRU: cityNameRU,
          secondBlockClass: secondBlockClass
        })
        
      };

      componentDidMount() {
        this.getWeather(this.props.id);
      }
    

    render(){
        return(
            <div id = {`${this.state.cityName}`}>
                <div className='showSub'>
                   <FirstBlock 
                        temp = {this.state.temp} 
                        weatherName = {this.state.weatherName} 
                        weatherID = {this.state.weatherID} 
                        srcImg = {this.state.srcImg}
                        weatherRU = {this.state.weatherRU}
                        cityName = {this.state.cityName}
                        cityNameRU = {this.state.cityNameRU}
                   /> 
                   <SecondBlock 
                          windSpeed = {this.state.windSpeed}
                          windDeg = {this.state.windDeg}
                          pressure = {this.state.pressure}
                          humidity = {this.state.humidity}
                          secondBlockClass = {this.state.secondBlockClass}/>
                </div>
            </div>
        )
    }
}


export default City