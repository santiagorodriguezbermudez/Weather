
const ApiImage = (() => {
  const url = 'https://source.unsplash.com/1600x900/?';

  const getImage = (currentWeather) => new Promise((resolve, reject) => {
    fetch(`${url}nature,sky,${currentWeather}`,
      {
        mode: 'cors',
      }).then((res) => {
      if (res.url) {
        resolve(res.url);
      } else {
        reject();
      }
    });
  });

  return {
    getImage,
  };
})();

export default ApiImage;