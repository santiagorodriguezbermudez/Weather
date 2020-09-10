import WeatherAPI from './weatherApi';
import View from './view';
import ImageAPI from './imageApi';

const Controller = (() => {
  const switchtoFarenheit = () => {
    const imperial = document.getElementById('imperial');
    if (imperial.className.includes('red')) {
      View.toogleUnitButton();
      const functionConvert = (c) => ((c * (9 / 5)) + 32).toPrecision(4);
      View.changeTempUnit(functionConvert, '   °F');
    }
  };

  const switchtoCelsius = () => {
    const metric = document.getElementById('metric');

    if (metric.className.includes('red')) {
      View.toogleUnitButton();
      const functionConvert = (f) => ((f - 32) * (5 / 9)).toPrecision(4);
      View.changeTempUnit(functionConvert, '   °C');
    }
  };

  const callApi = (city) => {
    WeatherAPI.getCurrentWeather(city).then((response) => {
      View.printApi(response);
      ImageAPI.getImage(response).then((responseImage) => {
        View.printImage(responseImage);
      });
    }).catch(() => {
      View.error('Location not found!');
    });
  };

  const startWeatherApp = () => {
    callApi('bogota');
  };

  const toogleAnimation = () => {
    View.toogleAnimation();
  };

  const getData = () => {
    const city = document.getElementById('city-input').value.trim();
    if (city === '') {
      View.error('Error: Please enter a valid city');
    } else {
      toogleAnimation();
      callApi(city);
    }
  };

  return {
    startWeatherApp,
    switchtoFarenheit,
    switchtoCelsius,
    getData,
    toogleAnimation,
  };
})();

export default Controller;