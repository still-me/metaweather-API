import React, { useState, useEffect } from 'react';

import {
  getLocationByCoordinate,
  getWeatherByCity,
} from '../../services/weather-service';
import Modal from '../../components/AllowModal';
import AlertWarn from '../../components/AlertWarn';
import AlertError from '../../components/AlertError';
import WeatherCard from '../../components/WeatherCard';
import SearchForm from '../../components/SearchForm';
import CentredContainer from '../../components/CentredContainer';
import Range from '../../components/Range';
import destructureWeatherData from '../../helpers/destructureWeatherData';

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);
  const [allowSharePosition, setAllowSharePosition] = useState(false);
  const [currentWeather, setCurrentWeather] = useState();
  const [showAlertWarn, setShowAlertWarn] = useState(false);
  const [searchQueryErrorName, setSearchQueryErrorName] = useState(false);

  const onModalClose = e => {
    const button = e.target.dataset.action;

    if (button === 'allow') {
      setAllowSharePosition(true);
    }

    setShowModal(false);
  };

  const onAlertWarnClose = () => {
    setShowAlertWarn(false);
  };

  const onAlertErrorClose = () => {
    setSearchQueryErrorName('');
  };

  const onSearchFormSubmit = async query => {
    try {
      const data = await getWeatherByCity(query);
      const newCurrentWeather = destructureWeatherData(data);
      setCurrentWeather({
        ...newCurrentWeather,
      });

      if (searchQueryErrorName) {
        setSearchQueryErrorName('');
      }
    } catch (error) {
      setSearchQueryErrorName(query);
    }
  };

  const onRangeChange = ({ target }) => {
    const temp = target.value;
    setCurrentWeather(weather => ({ ...weather, temp }));
  };

  useEffect(() => {
    if (allowSharePosition) {
      const onSuccess = async ({ coords: { latitude, longitude } }) => {
        try {
          const data = await getLocationByCoordinate(latitude, longitude);
          const newCurrentWeather = destructureWeatherData(data);
          setCurrentWeather({
            ...newCurrentWeather,
          });
        } catch (error) {
          console.log(error);
        }
      };

      const onError = ({ code }) => {
        if (allowSharePosition && code === 1) {
          setShowAlertWarn(true);
        }
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [allowSharePosition]);

  return (
    <>
      <SearchForm onSubmit={onSearchFormSubmit} />
      {currentWeather && (
        <CentredContainer>
          <WeatherCard currentWeather={currentWeather} />
          <Range
            currentTemperature={currentWeather.temp}
            handleChange={onRangeChange}
          />
        </CentredContainer>
      )}

      <Modal show={showModal} onButtonClick={onModalClose} />
      {showAlertWarn && <AlertWarn onAlertClose={onAlertWarnClose} />}
      {searchQueryErrorName && (
        <AlertError
          onAlertClose={onAlertErrorClose}
          name={searchQueryErrorName}
        />
      )}
    </>
  );
}
