const destructureWeatherData = data => {
  const { icon, description } = data.weather[0];
  const { name } = data;
  const { country } = data.sys;
  const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
  const { speed } = data.wind;
  const { lon, lat } = data.coord;

  return {
    icon,
    description,
    name,
    country,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    lon,
    lat,
  };
};

export default destructureWeatherData;
