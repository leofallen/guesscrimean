
const pointsCounter = (arr) => {
  let obj = {
    'points': 0,
    'timeLeft': 300,
    'fast': 0,
    'error': 0
  };

  const fail = arr.length < 10;

  if (fail) {
    obj.points = -1;
    return obj;
  }

  arr.forEach((it) => {
    obj.timeLeft -= it.time;
    if (it.answer) {
      let p = it.time <= 30 ? 2 : 1;
      let f = it.time <= 30 ? 1 : 0;
      obj.points += p;
      obj.fast += f;
    } else if (!it.answer) {
      obj.points -= 2;
      obj.error += 1;
    }
  });

  return obj;
};

export default pointsCounter;
