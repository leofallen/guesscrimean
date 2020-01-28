import { getElementFromTemplate, shuffle, getRandom } from "../data/util";

const gameGenreTemplate = (music) => `
<section class="game__screen">
  <h2 class="game__title">Выберите ${music[getRandom(0, 3)].genre} треки</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio class="track__audio" src="${music[0].src}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[0].genre}" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio class="track__audio" src="${music[1].src}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[1].genre}" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio class="track__audio" src="${music[2].src}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[2].genre}" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio class="track__audio" src="${music[3].src}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${music[3].genre}" id="answer-4">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit" disabled>Ответить</button>
  </form>
</section>`;

export default (audio, onAnswerClick) => {
  const music = shuffle(audio);
  const gameGenreScreen = getElementFromTemplate(gameGenreTemplate(music), `section`, `game`);
  const trackButtons = gameGenreScreen.querySelectorAll(`.track__button`);
  const tracks = gameGenreScreen.querySelectorAll(`.track__audio`);
  const answerButton = gameGenreScreen.querySelector(`.game__submit`);
  const answers = gameGenreScreen.querySelectorAll(`input[type=checkbox]`);

  const stopAllTracks = () => {
    tracks.forEach((track, i) => {
      track.pause();
      trackButtons[i].classList.remove(`track__button--pause`);
    });
  };

  const activateAnswerButton = () => {
    const checkedAnswers = document.querySelectorAll(`input[type=checkbox]:checked`);
    if (checkedAnswers.length > 0) {
      answerButton.removeAttribute(`disabled`);
    } else {
      answerButton.setAttribute(`disabled`, ``);
    }
  };

  answers.forEach((it) => {
    it.addEventListener(`click`, activateAnswerButton);

  });

  trackButtons.forEach((it, i) => {
    it.addEventListener(`click`, () => {
      const isPlay = it.classList.contains(`track__button--pause`);

      if (isPlay) {
        tracks[i].pause();
        it.classList.remove(`track__button--pause`);
        return ``;
      }

      stopAllTracks();
      tracks[i].play();
      it.classList.toggle(`track__button--pause`);
    });
  });

  answerButton.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    onAnswerClick();
  });

  return gameGenreScreen;
};
