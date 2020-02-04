import { screenChange } from "./util";
import timeout from "../screens/timeout";
import startGame from "../data/start-game";
import { INITIAL_STATE } from "./game-data";

const makeTimer = () => {
  let interval;
  let DASHARAY = 2325;
  let DASHOFFSET = 0;
  let DASHMOVE = 7.8;

  return {
    start(min, sec, timeLine) {
      interval = setInterval(() => {
        if (min.textContent === `0` && sec.textContent === `00`) {
          screenChange(timeout(startGame));
          min.textContent = INITIAL_STATE.minutes;
          sec.textContent = INITIAL_STATE.seconds
          this.reset();
          return ``;
        }
        if (sec.textContent === `00` || sec.textContent === `0`) {
          min.textContent--;
          sec.textContent = 60;
        }
        sec.textContent--;
        sec.textContent = sec.textContent.padStart(2, '0')
        timeLine.style.strokeDasharray = DASHARAY - DASHMOVE;
        timeLine.style.strokeDashoffset = DASHOFFSET + DASHMOVE;
        DASHARAY -= DASHMOVE;
        DASHOFFSET += DASHMOVE;
      }, 1000);
    },
    reset() {
      clearInterval(interval);
      DASHARAY = 2325;
      DASHOFFSET = 0;
    },
  }
};

export default makeTimer;
