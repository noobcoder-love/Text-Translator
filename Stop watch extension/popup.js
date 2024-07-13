let timer;
let seconds = 0, minutes = 0, hours = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimeDisplay();
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimeDisplay();
}

function updateTimeDisplay() {
  const sec = seconds < 10 ? '0' + seconds : seconds;
  const min = minutes < 10 ? '0' + minutes : minutes;
  const hr = hours < 10 ? '0' + hours : hours;
  timeDisplay.textContent = `${hr}:${min}:${sec}`;
}
