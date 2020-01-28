import {getDomElement, getRandom, shuffle, initialState} from "./util";
import counter from "./counter";
// import resultSuccess from "./screen-result-success";

const getScreenArtist = (audio) => {

  const music = shuffle(audio);

  const artist = music.slice(0, 3)[getRandom(0, 2)];

  const screenArtistTemplate = `
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play track__button--pause" type="button"></button>
      <audio class="track-audio" src="${artist.src}" autoplay loop></audio>
    </div>

    <form class="game__artist">
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[0].artist}" id="answer-1">
        <label class="artist__name" for="answer-1">
          <img class="artist__picture" src="${music[0].image}" alt="${music[0].artist}">
          ${music[0].artist}
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[1].artist}" id="answer-2">
        <label class="artist__name" for="answer-2">
          <img class="artist__picture" src="${music[1].image}" alt="${music[1].artist}">
          ${music[1].artist}
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${music[2].artist}" id="answer-3">
        <label class="artist__name" for="answer-3">
          <img class="artist__picture" src="${music[2].image}" alt="${music[2].artist}">
          ${music[2].artist}
        </label>
      </div>
    </form>
  </section>`;

  const screenArtist = getDomElement(screenArtistTemplate);
  const playButton = screenArtist.querySelector(`.track__button`);
  const artistButtons = screenArtist.querySelectorAll(`.artist__input`);
  const track = screenArtist.querySelector(`.track-audio`);

  playButton.onclick = () => {
    if (playButton.classList.contains(`track__button--pause`)) {
      track.pause();
      playButton.classList.toggle(`track__button--pause`);
      return ``;
    }
    playButton.classList.toggle(`track__button--pause`);
    track.play();
    return ``;
  };

  artistButtons.forEach((it) => {
    it.onclick = () => {
      const gameContainer = document.querySelector(`.game`);
      if (it.value !== artist.artist) {

        initialState.mistakes.push(1);
      } else {
        // console.log(`true`);
      }
      gameContainer.innerHTML = ``;
      gameContainer.appendChild(initialState.levels[0](music));
      counter.getNext();
    };
  });

  return screenArtist;
};

export default getScreenArtist;
