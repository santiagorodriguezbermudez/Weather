
const ApiImage = (() => {
  const url = 'https://source.unsplash.com/1600x900/?';

  const getImage = (weatherObj) => new Promise((resolve, reject) => {
    const weather = weatherObj.weather[0].main;
    fetch(`${url}sky,${weather}`,
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