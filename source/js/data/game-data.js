import welcome from "../screens/welcome";
import { header } from "../screens/header";
import gameGenre from "../screens/game-genre";
import gameArtist from "../screens/game-artist";
import resultSuccess from "../screens/result-success";

export const GameOptions = {
  LEVELS: 10,
  ATTEMPTS: 3,
  QUICK_ANSWER: 30,
};

const INITIAL_STATE = {
  minutes: '5',
  seconds: '00',
  mistakes: '0',
};

export const gameScreens = {
  welcome,
  header,
  gameGenre,
  gameArtist,
  resultSuccess
};

Object.freeze(INITIAL_STATE);
export { INITIAL_STATE };
