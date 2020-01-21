import {getDomElement, getRandom, shuffle, initialState} from "./util";

const GetScreenGenre = (audio) => {

  const music = shuffle(audio);

  const genre = music.slice(0, 4)[getRandom(0, 3)].genre;

  const screenGenreTemplate = `<section class="game__screen">
    <h2 class="game__title">Выберите ${genre} треки</h2>
    <form class="game__tracks">
      <div class="track">
        <button class="track__button track__button--play" value="track-1" type="button"></button>
        <div class="track__status">
          <audio class="track-audio track-1" src="${music[0].src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[0].genre}" id="answer-1">
          <label class="game__check" for="answer-1">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" value="track-2" type="button"></button>
        <div class="track__status">
          <audio class="track-audio track-2" src="${music[1].src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[1].genre}" id="answer-2">
          <label class="game__check" for="answer-2">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" value="track-3" type="button"></button>
        <div class="track__status">
          <audio class="track-audio track-3" src="${music[2].src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[2].genre}" id="answer-3">
          <label class="game__check" for="answer-3">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" value="track-4" type="button"></button>
        <div class="track__status">
          <audio class="track-audio track-4" src="${music[3].src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[3].genre}" id="answer-4">
          <label class="game__check" for="answer-4">Отметить</label>
        </div>
      </div>

      <button class="game__submit button" type="submit" disabled>Ответить</button>
    </form>
    </section>`;

  const screenGenre = getDomElement(screenGenreTemplate, `section`, `game`);

  const gameTracks = screenGenre.querySelectorAll(`.track-audio`);
  const submitButton = screenGenre.querySelector(`.game__submit`);
  const playButtons = screenGenre.querySelectorAll(`.track__button`);
  const inputs = screenGenre.querySelectorAll(`.game__input`);

  // воспроизведение/остановка треков по клику
  playButtons.forEach((it) => {
    it.onclick = (evt) => {
      const track = document.querySelector(`.${evt.target.value}`);

      if (it.classList.contains(`track__button--pause`)) {
        track.pause();
        it.classList.remove(`track__button--pause`);
        return ``;
      }

      playButtons.forEach((el) => {
        el.classList.remove(`track__button--pause`);
      });

      gameTracks.forEach((trck) => {
        trck.pause();
      });

      evt.target.classList.toggle(`track__button--pause`);
      track.play();
      return ``;
    };
  });

  const checkboxesCheck = () => {
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
    it.onclick = checkboxesCheck;
  });

  const answerCheck = () => {
    const checkedCheckboxses = document.querySelectorAll(`input[type=checkbox]:checked`);
    for (let it of checkedCheckboxses) {
      if (it.value !== genre) {
        initialState.mistakes.push(1);
        console.log(initialState.mistakes);
        return `false`;
      }
    }
    // console.log(`true`);
    return true;
  };

  submitButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    answerCheck();
    const gameContainer = document.querySelector(`.game`);
    gameContainer.innerHTML = ``;
    gameContainer.appendChild(initialState.levels[getRandom(0, 1)](music));
  });

  return screenGenre;
};


export default GetScreenGenre;
