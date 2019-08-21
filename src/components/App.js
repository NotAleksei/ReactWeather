import React from 'react';
import './City';
import './App.css';
import City from './City';
import '../index.css'

class App extends React.Component {

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
    weatherRU: undefined
  }

  getWeather = async () => {
    const url = await fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&APPID=6c3d280ee9986f8ae6a7e9b49154cd8c')
    const weather = await url.json();

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

    if (getWeatherID >= 800 || getWeatherID < 700 ) {
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
      weatherRU: setWeatherRU
    })

  };

  componentDidMount() {
    this.getWeather()
  }

  
  render(){
    return(
    <City 
    temp = {this.state.temp}
    sunrise = {this.state.sunrise}
    sunset = {this.state.sunset}
    windSpeed = {this.state.windSpeed}
    windDeg = {this.state.windDeg}
    pressure = {this.state.pressure}
    humidity = {this.state.humidity}
    weatherName = {this.state.weatherName}
    weatherID = {this.state.weatherID}
    srcImg = {this.state.srcImg}
    weatherRU = {this.state.weatherRU}
    />
  )
  }
}

export default App;





