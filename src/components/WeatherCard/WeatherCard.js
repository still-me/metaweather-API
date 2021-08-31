import React from 'react';

import calculateBgColor from '../../helpers/calculateBgColor';
import styles from './WeatherCard.module.css';

export default function WeatherCard({
  currentWeather: {
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
  },
}) {
  return (
    <div
      className={styles.Card}
      style={{
        backgroundColor: calculateBgColor(temp),
      }}
    >
      <h2
        className={styles.currentDate}
      >{`${new Date().toLocaleDateString()}`}</h2>
      <div className={styles.infoWrapper}>
        <div className={styles.weatherIconWrapper}>
          <img
            width="100"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </div>

        <div>
          <div className={styles.country}>
            <p className={styles.countryName}>{`${name}, ${country}`}</p>
            <img
              width="30"
              src={`https://openweathermap.org/images/flags/${country.toLowerCase()}.png`}
              alt={country}
            />
          </div>
          <p>
            <b className={styles.currentTemp}>
              {`${Math.round(temp)}°С (feels like ${Math.round(feels_like)}°С)`}
            </b>
            {`, temperature from ${Math.round(temp_min)} to ${Math.round(
              temp_max,
            )}°С, wind ${speed} m/s, humidity ${humidity}%`}
          </p>
          <p>{`Geo coords: [${lon}, ${lat}]`}</p>
        </div>
      </div>
    </div>
  );
}
