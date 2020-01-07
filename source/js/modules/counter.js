const pointsCounter = (arr) => {
  let points = 0;

  if (arr.length < 10) {
    points = -1;
    return points;
  }

  arr.forEach((it) => {
    if (it.answer) {
      let x = it.time < 30 ? 2 : 1;
      points = points + x;
    } else if (!it.answer) {
      points = points - 2;
    }
  });

  return points;
};

export default pointsCounter;
