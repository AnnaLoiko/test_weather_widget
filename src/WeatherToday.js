import React from 'react';
import Moment from 'react-moment';

export default function WeatherToday(props) {
    const { dayWeather, renderIconUrl, tempToСelsius, windDeg } = props;

    return (
        <React.Fragment>
            <div className="city">{dayWeather.city} {dayWeather.country}</div>
            <div className="cityTime"><Moment unix format="h:mm">{dayWeather.dt}</Moment></div>
            <img alt="scattered clouds" src={  renderIconUrl(dayWeather.icon)  } />
            <span className="descr">{dayWeather.descr}</span>
            <span className="temp">{  tempToСelsius(dayWeather.mainTemp)  }</span>
            <div className="windDeg">{  windDeg(dayWeather.winddeg)  }</div>
            <div className="windSpeed">{dayWeather.windSpeed} m/s</div>
        </React.Fragment>
    );
}