const clockText = document.getElementsByClassName("clock")[0];
const startBtn = document.getElementsByClassName("start")[0];
const pauseBtn = document.getElementsByClassName("pause")[0];
const continueBtn = document.getElementsByClassName("continue")[0];
const restartBtn = document.getElementsByClassName("restart")[0];
const milisecondTag = document.getElementsByClassName("miliSecond")[0];

let milisecond = 0;
const milifunction = () => {
  milisecond += 1;
  if (milisecond === 6000) {
    milisecond = 0;
  }
  milisecondTag.textContent = milisecond;
};
let milisecondInterval;
let seconds = 0,
  mintues = 0,
  hours = 0;
let intervalId;
const startFtn = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    mintues += 1;
  }
  if (mintues === 60) {
    mintues = 0;
    hours += 1;
  }
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const mintuesText = mintues < 10 ? "0" + mintues.toString() : mintues;
  const hoursText = hours < 10 ? "0" + hours.toString() : hours;
  clockText.textContent = hoursText + ":" + mintuesText + ":" + secondText;
};
startBtn.addEventListener("click", () => {
  intervalId = setInterval(startFtn, 1000);
  milisecondInterval = setInterval(milifunction, 10);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  clearInterval(milisecondInterval);
});
continueBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startFtn, 1000);
  clearInterval(milisecondInterval);
  milisecondInterval = setInterval(milifunction, 10);
});
restartBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (mintues = 0), (hours = 0);
  intervalId = setInterval(startFtn, 1000);
  clearInterval(milisecondInterval);
  milisecond = 0;
  milisecondInterval = setInterval(milifunction, 10);
});
