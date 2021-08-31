const calculateBgColor = temp => {
  let result;

  switch (true) {
    case temp < -10:
      result = '#00ffff';
      break;

    case temp > -10 && temp <= 10:
      result = '#ffe4c4';
      break;

    case temp > 10 && temp <= 30:
      result = '#fff700';
      break;

    case temp > 30:
      result = '#ff8c00';
      break;

    default:
      break;
  }

  return result;
};

export default calculateBgColor;
