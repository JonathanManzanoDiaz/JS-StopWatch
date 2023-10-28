let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let stopBtn = document.getElementById("stopBtn");
let secSpan = document.getElementById("seconds");
let miliSpan = document.getElementById("miliseconds");

let seconds = 0;
let time = 0;
let timeInt;
startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;
function getMili() {
  if (time >= 99) {
    time = 0;
    seconds++;
  } else {
    time++;
  }
}

function startTimer() {
  timeInt = setInterval(() => {
    getMili();
    if (time <= 9) {
      miliSpan.innerHTML = `0${time}`;
    } else {
      miliSpan.innerHTML = time;
    }
    if (seconds <= 9) {
      secSpan.innerHTML = `0${seconds}`;
    } else {
      secSpan.innerHTML = seconds;
    }
  }, 10);
}
function stopTimer() {
  clearInterval(timeInt);
}
function resetTimer() {
  time = 0;
  seconds = 0;
  secSpan.innerHTML = `00`;
  miliSpan.innerHTML = `00`;
}
