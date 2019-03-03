import React from 'react';
import WeatherItem from './WeatherItem';

export default function WeatherToday(props) {
  const { listWeather, renderIconUrl, tempToСelsius, addDateClass } = props;

  return (
    <ul>
        {listWeather.map((dayWeather, index) => {
            return (
                <WeatherItem 
                    key={index}
                    icon={dayWeather.weather[0].icon}
                    mainTemp={dayWeather.main.temp}
                    {...dayWeather}
                    index={index}
                    renderIconUrl={renderIconUrl}
				    tempToСelsius={tempToСelsius}
					addDateClass={addDateClass}
                />
            );
        })}
    </ul>
  );
}