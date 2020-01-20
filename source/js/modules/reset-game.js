import {screenLoad} from "./util";
import screenWelcome from "./screen-welcome";

const resetGame = () => {
  screenLoad(screenWelcome);
};

export default resetGame;
