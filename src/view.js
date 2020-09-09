
const View = (() => {
  const printApi = (weatherObj) => {
    
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