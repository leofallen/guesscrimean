import {getDomElement, initialState, screenLoad} from "./util";
import resetGame from "./reset-game";
import resulTimeout from "./result-timeout";

const gameState = Object.assign({}, initialState);

const headerTemplate = (state) => `<header class="game__header">
<a class="game__back" href="#">
  <span class="visually-hidden">Сыграть ещё раз</span>
  <img class="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию">
</a>

<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle class="timer__line" cx="390" cy="390" r="370" stroke-dasharray="2325"
  stroke-dashoffset="0">
</svg>

<div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
  <span class="timer__mins">${state.minutes}</span>
  <span class="timer__dots">:</span>
  <span class="timer__secs">${state.seconds}</span>
</div>

<div class="game__mistakes">
${state.mistakes.map(() =>
    `<div class="wrong"></div>`
  ).join(``)}
</div>
</header>`;

export const header = getDomElement(headerTemplate(gameState));
const timeLine = header.querySelector(`.timer__line`);
const replyButton = header.querySelector(`.game__back`);

// таймер
const min = header.querySelector(`.timer__mins`);
const sec = header.querySelector(`.timer__secs`);
let interval = 0;

replyButton.onclick = resetGame;

export const startTimer = () => {
  let dasharray = 2325;
  let dashoffset = 0;
  let dashMove = 7.8;

  interval = setInterval(() => {
    if (min.textContent === `0` && sec.textContent === `00`) {
      screenLoad(resulTimeout);
      clearInterval(interval);
    } else if (sec.textContent === `00`) {
      min.textContent--;
      sec.textContent = 59;
    } else {
      sec.textContent--;
      if (sec.textContent < 10) {
        sec.textContent = `0` + sec.textContent;
      }
      timeLine.style.strokeDasharray = dasharray + dashMove;
      timeLine.style.strokeDashoffset = dashoffset - dashMove;
      dasharray += dashMove;
      dashoffset -= dashMove;
    }
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(interval);
  min.textContent = 4;
  sec.textContent = 59;
  timeLine.style.strokeDasharray = 2325;
  timeLine.style.strokeDashoffset = 0;
};
