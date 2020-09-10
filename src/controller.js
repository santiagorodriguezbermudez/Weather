import WeatherAPI from './weatherApi';
import View from './view';
import ImageAPI from './imageApi';

const Controller = (() => {
  const switchtoFarenheit = (current) => {
    const f = Math.round((current * (9 / 15)) + 32);
    View.displayTemperature(`${f}°F`);
  };

  const switchtoCelsius = (current) => {
    const c = Math.round((current - 32) * (5 / 9));
    View.displayTemperature(`${c}°C`);
  };

  const callApi = (city) => {
    WeatherAPI.getCurrentWeather(city).then((response) => {
      View.printApi(response);
      ImageAPI.getImage(response).then((responseImage) => {
        View.printImage(responseImage);
      });
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