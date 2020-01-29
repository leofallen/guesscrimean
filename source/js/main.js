import { screenChange, mainContainer, getRandom, counter } from "./data/util";
import music from "./data/music";
import { gameScreens, GameOptions, INITIAL_STATE } from "./data/game-data";

const resetGame = () => {
  screenChange(gameScreens.welcome(onStartGameButtonClick));
};



const onAnswerButtonClick = () => {
  if(counter.getNext() === GameOptions.LEVELS) {
    screenChange(gameScreens.resultSuccess(resetGame));
    counter.reset();
    return ``;
  }

  let gameContainer = document.querySelector(`.game-container`);
  gameContainer.innerHTML = ``;
  gameContainer.appendChild([gameScreens.gameGenre, gameScreens.gameArtist][getRandom(0, 1)](music, onAnswerButtonClick))
}

const onStartGameButtonClick = () => {
  const header = document.createElement(`div`);
  const game = document.createElement(`div`);

  header.classList.add(`header-container`);
  game.classList.add(`game-container`);

  const gameState = Object.assign({}, INITIAL_STATE);

  header.appendChild(gameScreens.header(gameState, resetGame));
  game.appendChild(gameScreens.gameGenre(music, (onAnswerButtonClick)));

  mainContainer.innerHTML = ``;
  mainContainer.appendChild(header);
  mainContainer.appendChild(game);
};

screenChange(gameScreens.welcome(onStartGameButtonClick));
