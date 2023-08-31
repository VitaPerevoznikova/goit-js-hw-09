const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let timer;
let isTimerActive = false;

start.addEventListener('click', () => {
  if (!isTimerActive) {
    timer = setInterval(changeBackgroundColor, 1000);
    isTimerActive = true;
  }
});

stop.addEventListener('click', () => {
  if (isTimerActive) {
    clearInterval(timer);
    isTimerActive = false;
  }
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
