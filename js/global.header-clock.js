const clockContainer = document.querySelector('.header__clock');
function updateClock() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   clockContainer.innerText = `${hours}:${minutes}:${seconds}`;
  clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately