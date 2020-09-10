
const View = (() => {
  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const toogleUnitButton = () => {
    const imperialBtn = document.getElementById('imperial');
    const metricBtn = document.getElementById('metric');

    imperialBtn.classList.toggle('red-btn');
    imperialBtn.classList.toggle('green-btn');
    metricBtn.classList.toggle('red-btn');
    metricBtn.classList.toggle('green-btn');
  };

  const printApi = (weatherObj) => {
    let fullDateSunrise = new Date((weatherObj.sunrise + weatherObj.timezone) * 1000);
    let fullDateSunset = new Date((weatherObj.sunset + weatherObj.timezone) * 1000);
    const tempFeel = `${weatherObj.main.feels_like}   °C`;
    const tempMax = `${weatherObj.main.temp_max}   °C`;
    const tempMin = `${weatherObj.main.temp_min}   °C`;

    fullDateSunrise = fullDateSunrise.toUTCString();
    fullDateSunset = fullDateSunset.toUTCString();
    fullDateSunrise = fullDateSunrise.toString().slice(0, 22);
    fullDateSunset = fullDateSunset.toString().slice(0, 22);

    document.getElementById('city').innerHTML = weatherObj.city;
    document.getElementById('temp').innerHTML = `${weatherObj.main.temp}  °C`;
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@4x.png`;
    document.getElementById('weather').innerHTML = `${weatherObj.weather[0].main} - ${weatherObj.weather[0].description}`;
    document.getElementById('sunrise').innerHTML = fullDateSunrise;
    document.getElementById('sunset').innerHTML = fullDateSunset;
    document.getElementById('temp-feel').innerHTML = tempFeel;
    document.getElementById('temp-max').innerHTML = tempMax;
    document.getElementById('temp-min').innerHTML = tempMin;
    document.getElementById('wind').innerHTML = weatherObj.wind;
  };

  const printImage = (url) => {
    const image = document.createElement('img');
    image.src = url;
    image.className += 'image';
    removeAllChildNodes(document.getElementById('image'));
    document.getElementById('image').append(image);
  };

  const error = (msg) => {
    alert(msg);
  };

  const updateTemp = (conversion, unitString, idElement) => {
    const tempString = document.getElementById(idElement).innerHTML;
    const temp = parseFloat(tempString.slice(0, 5), 10);
    const tempNew = conversion(temp);
    document.getElementById(idElement).innerHTML = `${tempNew}${unitString}`;
  };

  const changeTempUnit = (conversion, unitString) => {
    updateTemp(conversion, unitString, 'temp');
    updateTemp(conversion, unitString, 'temp-feel');
    updateTemp(conversion, unitString, 'temp-max');
    updateTemp(conversion, unitString, 'temp-min');
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
    printImage,
    toogleUnitButton,
    changeTempUnit,
  };
})();

export default View;