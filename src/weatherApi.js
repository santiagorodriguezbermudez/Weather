import WeatherObject from './weatherObj';

const ApiModule = (() => {
  const apiKey = '5ae86f35f8276d45d3067884b221401b';
  const url = 'https://api.openweathermap.org/data/2.5/weather';

  const getCurrentWeather = (city) => new Promise((resolve, reject) => {
    fetch(`${url}?q=${city}&units=metric&APPID=${apiKey}`,
      {
        mode: 'cors',
      }).then(res => res.json()).then((res) => {
      if (res) {
        const weatherObj = WeatherObject(
          res.name,
          res.sys.country,
          res.weather[0].description,
          res.wind.speed,
          res.main.humidity,
          res.main.temp,
          res.main.feels_like,
          res.main.temp_max,
          res.main.temp_min,
          res.weather[0].icon,
        );
        console.log(weatherObj);
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