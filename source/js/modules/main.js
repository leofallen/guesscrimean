import {screenChange} from "./util";
import welcome from "./welcome";
import {gameGenre, timer} from "./game-genre";
import gameArtist from "./game-artist";
import resultSuccess from "./result-success";

const startGameButton = welcome.querySelector(`.welcome__button`);

const addBackButtonListener = () => {
  const back = document.querySelector(`.game__back`);
  back.addEventListener(`click`, () => {
    screenChange(welcome);
  });
};


startGameButton.addEventListener(`click`, () => {
  const answer = gameGenre.querySelector(`.game__submit`);
  answer.addEventListener(`click`, onAnswerClick);
  resetCheckboxes();
  screenChange(gameGenre);
  timer();
  addBackButtonListener();
});

const onAnswerClick = (evt) => {
  evt.preventDefault();

  const artistButtons = gameArtist.querySelectorAll(`.artist__input`);
  const replyButton = resultSuccess.querySelector(`.result__replay`);

  artistButtons.forEach((it) => {
    it.addEventListener(`click`, () => {
      screenChange(resultSuccess);
    });
  });

  replyButton.addEventListener(`click`, () => {
    screenChange(welcome);
  });

  screenChange(gameArtist);
  addBackButtonListener();
};

const resetCheckboxes = () => {
  const checkBoxses = gameGenre.querySelectorAll(`input[type=checkbox]`);
  const answerButton = gameGenre.querySelector(`button[type=submit]`);
  answerButton.setAttribute(`disabled`, `true`);
  checkBoxses.forEach((it) => {
    if (it.checked) {
      it.checked = false;
    }
  });
};

screenChange(welcome);
