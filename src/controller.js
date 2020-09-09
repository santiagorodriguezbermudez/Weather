import WeatherAPI from './weatherApi';
import View from './view';

const Controller = (() => {

  const switchtoFarenheit = (current) => {
    const f = Math.round((current * (9 / 15)) + 32);
    View.displayTemperature(`${f}°F`);
  };

  const switchtoCelsius = (current) => {
    const c = Math.round((current - 32) * (5 / 9));
    View.displayTemperature(`${c}°C`);
  };

  const startWeatherApp = () => {
    WeatherAPI.getCurrentWeather('bogota').then((response) => {
      View.printApi(response);
    });
  };

  const listenToUserInput = () => {

  };

  return {
    startWeatherApp,
    listenToUserInput,
    switchtoFarenheit,
    switchtoCelsius,
  };
})();

export default Controller;