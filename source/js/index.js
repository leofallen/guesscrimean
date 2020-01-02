const gameScreens = document.querySelectorAll('template');
const main = document.querySelector('.app');
const arows = main.querySelectorAll('.arrows__btn');

const KEYS = {
  left: 37,
  right: 39,
  enter: 13,
  esc: 27
};

const log = (el) => {
  console.log(el);
};

const getScreen = (n) => {
  let screen = gameScreens[n].content.querySelector('section').cloneNode(true);
  return screen;
};

const appendScreen = (n) => {
  main.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const element = getScreen(n);
  fragment.appendChild(element);
  main.appendChild(fragment);
};

const screenChange = () => {
  let n = 0;

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEYS.right) {
      n = n + 1;
    } else if (evt.keyCode === KEYS.left) {
      n = n - 1;
    }
  
    if (n < 0) {
      n = gameScreens.length - 1;
    } else if (n >= gameScreens.length) {
      n = 0;
    }

    appendScreen(n);
  });
};

const arrowsBlock = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 135px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;

screenChange();

main.insertAdjacentHTML("beforeEnd", arrowsBlock);

