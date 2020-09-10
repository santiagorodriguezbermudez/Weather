
const View = (() => {
  const printApi = (weatherObj) => {
    console.log(weatherObj);
    let fullDateSunrise = new Date(weatherObj.sunrise * 1000);
    let fullDateSunset = new Date(weatherObj.sunset * 1000);
    const tempFeel = `${weatherObj.main.feels_like} °C`;
    const tempMax = `${weatherObj.main.temp_max} °C`;
    const tempMin = `${weatherObj.main.temp_min} °C`;

    fullDateSunrise = fullDateSunrise.toString().slice(0, 21);
    fullDateSunset = fullDateSunset.toString().slice(0, 21);

    document.getElementById('city').innerHTML = weatherObj.city;
    document.getElementById('temp').innerHTML = `${weatherObj.main.temp} °C`;
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@4x.png`;
    document.getElementById('weather').innerHTML = `${weatherObj.weather[0].main} - ${weatherObj.weather[0].description}`;
    document.getElementById('sunrise').innerHTML = fullDateSunrise;
    document.getElementById('sunset').innerHTML = fullDateSunset;
    document.getElementById('temp-feel').innerHTML = tempFeel;
    document.getElementById('temp-max').innerHTML = tempMax;
    document.getElementById('temp-min').innerHTML = tempMin;
  };

  const error = (msg) => {
    alert(msg);
  };

  const toogleAnimation = () => {
    document.getElementById('city-input').classList.toggle('input-animation');
    document.getElementById('submit-check').classList.toggle('input-animation');
    document.getElementById('city-input').classList.toggle('hidden');
    document.getElementById('submit-check').classList.toggle('hidden');
    document.getElementById('check-city').classList.toggle('hidden');
  };

  return {
    printApi,
    error,
    toogleAnimation,
  };
})();

export default View;