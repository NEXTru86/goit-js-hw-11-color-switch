// import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    backgroundBody: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onCycleIteration);

function onCycleIteration() {
  
   timerId = setInterval(() => {
      onBackgroundBodyCycle(randomIntegerFromInterval(0, colors.length - 1));
    }, 1000);
};

function onBackgroundBodyCycle(number) {
    refs.backgroundBody.style.backgroundColor = colors[number];
    console.log(refs.backgroundBody.style);
};

refs.stopBtn.addEventListener('click', offCycleIteration);

function offCycleIteration() {
  clearInterval(timerId);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};