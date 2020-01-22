import {screenLoad} from "./util";
import screenWelcome from "./welcome";
import {resetTimer} from "./header";

const resetGame = () => {
  screenLoad(screenWelcome);
  resetTimer();
};

export default resetGame;
