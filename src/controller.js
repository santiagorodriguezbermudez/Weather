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
      console.log(response);
    });
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
      WeatherAPI.getCurrentWeather(city).then((response) => {
        View.printApi(response);
      });
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