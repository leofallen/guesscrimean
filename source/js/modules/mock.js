import {getRandom} from "./util";
import pointsCounter from "./counter";

const getAnswer = () => {
  let obj = {};
  obj.answer = getRandom(0, 5);
  obj.time = getRandom(1, 31);
  return obj;
};

const getAnswers = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(getAnswer());
  }

  return arr;
};

const otherPlayers = [];

for (let i = 0; i < 4; i++) {
  let arr = getAnswers();
  otherPlayers.push(pointsCounter(arr));
}

export default otherPlayers;
