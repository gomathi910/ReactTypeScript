
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import React from 'react';
import './App.css'

// import TodoList from './TodoList';
// // import NavBar from './NavBar';
// // import { BrowserRouter , Route, Routes } from "react-router-dom";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Service from "./pages/Service";




// function App() {

// return (
// <div>
//     {/* <BrowserRouter>

//     <NavBar></NavBar>
// <Routes>
//   <Route path='/' element = {<Home/>}></Route>
//   <Route path='/About' element = {<About/>}></Route>
//   <Route path='/Service' element = {<Service/>}></Route>
// </Routes>
// </BrowserRouter> */}

// <WeatherApi></WeatherApi>

//     </div>
//   )

// }

// export default App


import  { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';
import { WeatherData } from './Types';
import { fetchWeather } from './WeatherService';
import CountdownTimer from './CountdownTimer';

function App() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="App">
      {/* <h1>Weather App</h1>
      <WeatherForm city={city} onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />} */}
    <CountdownTimer></CountdownTimer>
    </div>
  );
};
export default App