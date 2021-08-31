import React from 'react';

export default function WeatherCard({
  weather: { icon, description },
  name,
  country,
  main: { temp, feels_like, temp_min, temp_max, humidity },
  speed,
  coords: { lon, lat },
}) {
  return (
    <div
      style={{
        maxWidth: '700px',
        maxHeight: '500px',
        padding: '25px',
        outline: '1px solid red',
      }}
    >
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <div>
        <p>{`${name}, ${country}`}</p>
        <img
          src={`https://openweathermap.org/images/flags/${country.toLowerCase()}.png`}
          alt={country}
        />
      </div>

      <div>
        <p>{`${Math.round(temp)}°С (feels like ${Math.round(
          feels_like,
        )}°С), temperature from ${Math.round(temp_min)} to ${Math.round(
          temp_max,
        )}°С, wind ${speed} m/s, humidity ${humidity}%`}</p>
        <p>{`Geo coords: [${lon}, ${lat}]`}</p>
      </div>
    </div>
  );
}
