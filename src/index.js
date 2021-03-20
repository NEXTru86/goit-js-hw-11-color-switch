const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let cycleIterationIsActive = false;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  backgroundBody: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onCycleIteration);

function onCycleIteration() {
  if (cycleIterationIsActive) {
    return;
  }
  timerId = setInterval(() => {
    onBackgroundBodyCycle(randomIntegerFromInterval(0, colors.length - 1));
  }, 1000);

  cycleIterationIsActive = true;
};

function onBackgroundBodyCycle(number) {
  refs.backgroundBody.style.backgroundColor = colors[number];
};

refs.stopBtn.addEventListener('click', offCycleIteration);

function offCycleIteration() {
  cycleIterationIsActive = false;
  clearInterval(timerId);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};