import { getElementFromTemplate } from "../data/util";
import makeTimer from "../data/timer";

export const headerTemplate = `<a class="game__back" href="#">
<span class="visually-hidden">Сыграть ещё раз</span>
<img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
</a>

<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">

<svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; left: -1200em;">
  <filter id="blur">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
    <feOffset dx="0" dy="0"></feOffset>
    <feMerge>
      <feMergeNode></feMergeNode>
      <feMergeNode in="SourceGraphic"></feMergeNode>
    </feMerge>
  </filter>
</svg>
<circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
</svg>

<div class="timer__value">
<span class="timer__mins"></span>
<span class="timer__dots">:</span>
<span class="timer__secs"></span>
</div>
<div class="game__mistakes"></div>`;

export const header = (state, onBackButtonClick) => {
  let header = getElementFromTemplate(headerTemplate, `header`, `game__header`);
  const min = header.querySelector(`.timer__mins`);
  const sec = header.querySelector(`.timer__secs`);
  const timeLine = header.querySelector(`.timer__line`);

  const backButton = header.querySelector(`.game__back`);

  min.textContent = state.minutes;
  sec.textContent = state.seconds;

  timer.start(min, sec, timeLine);
  backButton.addEventListener(`click`, onBackButtonClick);
  return header;
};

const getMistakesTemplate = (n) => (
  `${
    new Array(n)
      .fill(`<div class="wrong"></div>`)
      .join('')
  }`
);

export const updateMistakes = (n) => {
  const container = document.querySelector(`.game__mistakes`);
  container.innerHTML = `${getMistakesTemplate(n)}`;
};

export const timer = makeTimer();
