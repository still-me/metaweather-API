import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'cd3ed43991acf7fa1adb46013469f81a';

export const getLocationByCoordinate = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByCity = async city => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
