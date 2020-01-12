import {getDomElement} from "./util";

const initialState = {
  'minutes': 5,
  'seconds': 0,
  'mistakes': []
};


const template = (state) => `<section class="game game--genre">
<header class="game__header">
  <a class="game__back" href="#">
    <span class="visually-hidden">Сыграть ещё раз</span>
    <img class="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию">
  </a>

  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle class="timer__line" cx="390" cy="390" r="370"
    transform: rotate(-90deg) scaleY(-1);
    transform-origin: center">
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
</header>

<section class="game__screen">
  <h2 class="game__title">Выберите инди-рок треки</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit" disabled>Ответить</button>
  </form>
</section>
</section>`;

const gameGenre = getDomElement(template(initialState));
const playButtons = gameGenre.querySelectorAll(`.track__button`);
const inputs = gameGenre.querySelectorAll(`.game__input`);

playButtons.forEach((it) => {
  it.addEventListener(`click`, (evt) => {
    evt.target.classList.toggle(`track__button--pause`);
  });
});

const answerCheck = () => {
  const checkedCheckboxses = document.querySelectorAll(`input[type=checkbox]:checked`);
  const answerButton = document.querySelector(`button[type=submit]`);
  const isChecked = checkedCheckboxses.length > 0;
  if (isChecked) {
    answerButton.removeAttribute(`disabled`);
  } else {
    answerButton.setAttribute(`disabled`, `true`);
  }
};

inputs.forEach((it) => {
  it.addEventListener(`click`, answerCheck);
});

export default gameGenre;
