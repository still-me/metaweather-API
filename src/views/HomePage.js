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

        setCurrentWeather({ ...data });
      };

      const onError = ({ code }) => {
        if (allowSharePosition && code === 1) {
          setShowAlert(true);
        }
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    return () => {};
  }, [allowSharePosition]);

  return (
    <div>
      <Modal show={showModal} onButtonClick={onModalClose} />
      {showAlert && <AlertWarn onAlertClose={onAlertClose} />}
      {currentWeather && (
        <WeatherCard
          weather={currentWeather.weather[0]}
          name={currentWeather.name}
          country={currentWeather.sys.country}
          main={currentWeather.main}
          speed={currentWeather.wind.speed}
          coords={currentWeather.coord}
        />
      )}
    </div>
  );
}
