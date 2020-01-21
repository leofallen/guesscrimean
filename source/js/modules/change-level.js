import screenGenre from "./screen-genre";
import screenArtist from "./screen-artist";

const levels = {
  'current': screenGenre,
  'next': screenArtist
};

const changeLevel = () => {
  let {next: one, current: two} = levels;
  levels = {next: two, current: one};

  const gameContainer = document.querySelector(`.game`);
  gameContainer.innerHTML = ``;
  gameContainer.appendChild(levels.next);
};

export default changeLevel;
