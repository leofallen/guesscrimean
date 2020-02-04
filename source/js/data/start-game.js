import { screenChange, mainContainer, getRandom, counter } from "./util";
import music from "./music";
import { gameScreens, GameOptions, INITIAL_STATE, answers } from "./game-data";
import pointsCounter from "./points-counter";
import { timer } from "../screens/header";

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
  let randomScreen = [gameScreens.gameGenre, gameScreens.gameArtist][getRandom(0, 1)];

  gameContainer.innerHTML = ``;
  gameContainer.appendChild(randomScreen(music, onAnswerButtonClick))
};

const onStartGameButtonClick = () => {
  const header = document.createElement(`div`);
  const game = document.createElement(`div`);
  const gameState = Object.assign({}, INITIAL_STATE);

  pointsCounter.reset();
  counter.reset();
  timer.reset();

  header.classList.add(`header-container`);
  game.classList.add(`game-container`);

  header.appendChild(gameScreens.header(gameState, resetGame));
  game.appendChild(gameScreens.gameGenre(music, (onAnswerButtonClick)));

  mainContainer.innerHTML = ``;
  mainContainer.appendChild(header);
  mainContainer.appendChild(game);
};

const startGame = () => {

  answers.splice(0, answers.length);
  screenChange(gameScreens.welcome(onStartGameButtonClick));
};

export default startGame;
