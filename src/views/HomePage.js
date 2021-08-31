import React, { useState, useEffect } from 'react';

import Modal from '../components/AllowModal';
import AlertWarn from '../components/AlertWarn';
import { getLocationByCoordinate } from '../services/weather-service';
import WeatherCard from '../components/WeatherCard';

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const [allowSharePosition, setAllowSharePosition] = useState(false);
  const [currentWeather, setCurrentWeather] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const onModalClose = e => {
    const button = e.target.dataset.action;

    if (button === 'allow') {
      setAllowSharePosition(true);
    }

    setShowModal(false);
  };

  const onAlertClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (allowSharePosition) {
      const onSuccess = async ({ coords: { latitude, longitude } }) => {
        const data = await getLocationByCoordinate(latitude, longitude);

        const { icon, description } = data.weather[0];
        const { name } = data;
        const { country } = data.sys;
        const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat } = data.coord;
        setCurrentWeather({
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
        });
      };

      const onError = ({ code }) => {
        if (allowSharePosition && code === 1) {
          setShowAlert(true);
        }
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [allowSharePosition]);

  return (
    <div>
      <Modal show={showModal} onButtonClick={onModalClose} />
      {showAlert && <AlertWarn onAlertClose={onAlertClose} />}
      {currentWeather && <WeatherCard currentWeather={currentWeather} />}
    </div>
  );
}
