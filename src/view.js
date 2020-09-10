
const View = (() => {
  const printApi = (weatherObj) => {
    console.log(weatherObj);
    document.getElementById('city').innerHTML = weatherObj.city;
    document.getElementById('temp').innerHTML = weatherObj.main.temp;
    const unit = document.createElement('span');
    unit.innerHTML = '°C';
    document.getElementById('temp').append(unit);
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@4x.png`;
    document.getElementById('weather').innerHTML = `${weatherObj.weather[0].main} - ${weatherObj.weather[0].description}`;
    let fullDateSunrise = new Date(weatherObj.sunrise * 1000);
    fullDateSunrise = fullDateSunrise.toString().slice(0, 21);
    document.getElementById('sunrise').innerHTML = fullDateSunrise;
    let fullDateSunset = new Date(weatherObj.sunset * 1000);
    fullDateSunset = fullDateSunset.toString().slice(0, 21);
    document.getElementById('sunset').innerHTML = fullDateSunset;
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