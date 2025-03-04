 const API_KEY = 'your-api-key'; // Replace with your OpenWeather API key
 const API_URL = 'https://api.0ef96082a6effeab45be4a8ed3202378';

export const fetchWeather = async (city: string) => {
    const response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  };
  