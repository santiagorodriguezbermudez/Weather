import WeatherObject from './weatherObj';

const ApiModule = (() => {
  const apiKey = '5ae86f35f8276d45d3067884b221401b';
  const url = 'https://api.openweathermap.org/data/2.5/weather';

  const getCurrentWeather = (city) => new Promise((resolve, reject) => {
    fetch(`${url}?q=${city}&units=metric&APPID=${apiKey}`,
      {
        mode: 'cors',
      }).then(res => res.json()).then((res) => {
      if (res.cod === 200) {
        const weatherObj = WeatherObject(
          res.name,
          res.sys.country,
          res.weather,
          res.wind.speed,
          res.main,
          res.sys.sunrise,
          res.sys.sunset,
        );
        resolve(weatherObj);
      } else {
        reject();
      }
    });
  });

  return {
    getCurrentWeather,
  };
})();

export default ApiModule;