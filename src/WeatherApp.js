import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './WeatherApp.css';

import WeatherToday from './WeatherToday';
import WeatherOther from './WeatherOther';

class WeatherApp extends Component {
	constructor(){
		super();

		this.state = {
			listWeather: [],
			dayWeather: {},
			weatherApi: 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247',
		}
	}
  


	componentDidMount() {
		const { weatherApi, listWeather } = this.state;

		axios.get(weatherApi)
		.then(response => {
			this.setState( { 
				listWeather: [...response.data.list],
				dayWeather: {
					city: response.data.city.name, 
					country: response.data.city.country, 
					dt: response.data.list[0].dt, 
					descr: response.data.list[0].weather[0].description, 
					mainTemp: response.data.list[0].main.temp, 
					winddeg: response.data.list[0].wind.deg, 
					windSpeed: response.data.list[0].wind.speed,
					icon: response.data.list[0].weather[0].icon,
				},		
			} ); 
			
		})
		.catch(error => console.log('error:', error));
  	}

	tempToСelsius = (tempCelvin) => {
		return Math.round(tempCelvin - 273.15) + '°C';
	}

	windDeg = (deg) => {
		if (deg > 0 && deg <= 22.5 || deg > 337.5){ 
			deg = 'северный';
		} else if (deg > 22.5 && deg > 67.5){
			deg = 'северо-восточный';
		} else if (deg > 67.5 && deg <= 112.5){
			deg = 'восточный';
		} else if (deg > 112.5 && deg <= 157.5){
			deg = 'юго-восточный';
		} else if (deg > 157.5 && deg <= 202.5){
			deg = 'южный';
		} else if (deg > 202.5 && deg <= 247.5){
			deg = 'юго-западный';
		} else if (deg > 247.5 && deg <= 292.5){
			deg = 'западный';
		} else if (deg > 292.5 && deg <= 360){
			deg = 'северо-западный';
		} else {
			deg = 'нет данных';
		}
		return deg;
	}

	renderIconUrl = (icon) => {
		let urlIcon = `https://openweathermap.org/img/w/${icon}.png`;
		return urlIcon;
	}

	addDateClass = (data) => {
		const { dayWeather } = this.state;
		if (moment.unix(data).format("DD/MM/YYYY") !== moment.unix(dayWeather.dt).format("DD/MM/YYYY")) {
			dayWeather.dt = data;
			return "nextdate";
		}
	}

	render() {
		const { listWeather, dayWeather } = this.state;

		return (
			<div id="forecast" className="tagForecast">
				<WeatherToday 
					dayWeather={dayWeather}
					renderIconUrl={this.renderIconUrl}
					windDeg={this.windDeg}
					tempToСelsius={this.tempToСelsius}
				/>
				<WeatherOther 
					listWeather={listWeather}
					renderIconUrl={this.renderIconUrl}
					tempToСelsius={this.tempToСelsius}
					addDateClass={this.addDateClass}
				/>
			</div>		
		);
	}
}

export default WeatherApp;