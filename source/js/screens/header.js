import { getElementFromTemplate } from "../data/util";

export const headerTemplate = `
  <a class="game__back" href="#">
    <span class="visually-hidden">Сыграть ещё раз</span>
    <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
  </a>

  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle class="timer__line" cx="390" cy="390" r="370">
  </svg>

  <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer__mins">05</span>
    <span class="timer__dots">:</span>
    <span class="timer__secs">00</span>
  </div>

  <div class="game__mistakes"></div>`;

export const header = (onBackButtonClick) => {
  let header = getElementFromTemplate(headerTemplate, `header`, `game__header`);
  const backButton = header.querySelector(`.game__back`);
  backButton.addEventListener(`click`, onBackButtonClick);
  return header;
};

const getMistakesTemplate = (state) => (
  `${
    new Array(state.mistakes)
      .fill(`<div class="wrong"></div>`)
      .join('')
  }`
);

export const updateMistakes = (container, state) => {
  container.innerHtml =  getMistakesTemplate(state);
};


const makeTimer = () => {
  let interval;

  return {
    start() {
      interval = setInterval(() => {
        // timer code
      }, 1000);
    },
    reset() {
      clearInterval(interval);
    },
  }
};

export const timer = makeTimer();
