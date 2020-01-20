let interval = 0;

export const timer = () => {
  let dasharray = 2325;
  let dashoffset = 0;
  let dashMove = 7.75;

  interval = setInterval(() => {
    if (min.textContent === `0` && sec.textContent === `0`) {
      clearInterval(interval);
    } else if (sec.textContent === `0`) {
      gameState.minutes--;
      gameState.seconds = 59;
    } else {
      gameState.seconds--;
      timeLine.style.strokeDasharray = dasharray + dashMove;
      timeLine.style.strokeDashoffset = dashoffset - dashMove;
      dasharray += dashMove;
      dashoffset -= dashMove;
    }
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(interval);
  gameState.minutes = 4;
  gameState.seconds = 59;
  timeLine.style.strokeDasharray = 2325;
  timeLine.style.strokeDashoffset = 0;
};
