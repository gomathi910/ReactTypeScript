import  { FC } from 'react';
import { WeatherData } from './Types';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: FC<WeatherCardProps> = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
