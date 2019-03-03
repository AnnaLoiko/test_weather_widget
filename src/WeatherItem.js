import React from 'react';
import Moment from 'react-moment';

export default function WeatherToday(props) {
    const { dt, mainTemp, icon, index, renderIconUrl, tempToСelsius, addDateClass } = props;
    
    return (
        <li key={index} className={addDateClass(dt, index)}>
            <span className="date"><Moment unix format="DD:MM:YYYY">{dt}</Moment></span>
            <span className="time"><Moment unix format="h:mm">{dt}</Moment></span>
            <span className="temp">{ tempToСelsius(mainTemp)  }</span>
            <img alt="broken clouds" src={ renderIconUrl(icon) } />
        </li>
    );
}