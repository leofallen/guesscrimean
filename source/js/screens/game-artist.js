import { getRandom, getElementFromTemplate, shuffle } from "../data/util";
import pointsCounter from "../data/points-counter";

const gameArtistTemplate = (music, artist) => `
<section class="game__screen">
  <h2 class="game__title">Кто исполняет эту песню?</h2>
  <div class="game__track">
    <button class="track__button track__button--play track__button--pause" type="button"></button>
    <audio class="track__audio" src="${artist.src}" autoplay></audio>
  </div>

  <form class="game__artist">
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[0].artist}" id="answer-1">
      <label class="artist__name" for="answer-1">
        <img class="artist__picture" src="${music[0].image}" alt="Пелагея">
        ${music[0].artist}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[1].artist}" id="answer-2">
      <label class="artist__name" for="answer-2">
        <img class="artist__picture" src="${music[1].image}" alt="Пелагея">
        ${music[1].artist}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[2].artist}" id="answer-3">
      <label class="artist__name" for="answer-3">
        <img class="artist__picture" src="${music[2].image}" alt="Пелагея">
        ${music[2].artist}
      </label>
    </div>
  </form>
</section>`;

export default (audio, onArtistButtonClick) => {
  const music = shuffle(audio).slice(0, 3);
  const artist = music[getRandom(0, 2)];
  const gameArtistScreen = getElementFromTemplate(gameArtistTemplate(music, artist), `section`, `game`)
  const artistButons = gameArtistScreen.querySelectorAll(`.artist__input`);
  const playButton = gameArtistScreen.querySelector(`.track__button`);
  const track = gameArtistScreen.querySelector(`.track__audio`);

  playButton.addEventListener(`click`, () => {
    const isPlay = playButton.classList.contains(`track__button--pause`);
    playButton.classList.toggle(`track__button--pause`);
    if (!isPlay) {
      track.play();
    } else {
      track.pause();
    }
  });

  for (let it of artistButons) {
    it.addEventListener(`click`, () => {
      onArtistButtonClick();
      if (artist.artist === it.value) {
        console.log(`yes`);
      } else {
        console.log(`no`);
        pointsCounter.addMistake();
      }
    });
  };

  return gameArtistScreen;
};
