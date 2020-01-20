import {getDomElement, initialState} from "./util";
import resetGame from "./reset-game";
// import timer from "./timer";

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

const header = getDomElement(headerTemplate(initialState));
const replyButton = header.querySelector(`.game__back`);
replyButton.addEventListener(`click`, resetGame);
// const sec = header.querySelector(`.timer__secs`);
// const min = header.querySelector(`.timer__mins`);

export default header;
