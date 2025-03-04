import React, { FC } from 'react';

interface WeatherFormProps {
  city: string;
  onCityChange: (city: string) => void;
}

const WeatherForm: FC<WeatherFormProps> = ({ city, onCityChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCityChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
      />
    </div>
  );
};

export default WeatherForm;
