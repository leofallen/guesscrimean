import { updateMistakes } from "../screens/header";
import { screenChange } from "./util";
import attempsEndedScreen from "../screens/attemps-ended";
import startGame from "./start-game";
import { GameOptions } from "./game-data";

const makePointsCounter = () => {
  let mistakes = 0;

  return {
    addMistake() {
      mistakes++;
      this.mistakes++;
      updateMistakes(mistakes);
      if (mistakes >= GameOptions.ATTEMPTS) {
        screenChange(attempsEndedScreen(startGame));
        this.reset();
      }
    },
    reset() {
      mistakes = 0;
      this.mistakes = 0
    },
    mistakes
  };
};

const pointsCounter = makePointsCounter();

export default pointsCounter;
