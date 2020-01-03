(function () {
  'use strict';

  const gameScreens = document.querySelectorAll('template');
  const main = document.querySelector('.app');
  const arows = main.querySelectorAll('.arrows__btn');

  const KEYS = {
    left: 37,
    right: 39,
    enter: 13,
    esc: 27
  };

  const appendScreen = (n) => {
    main.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const element = gameScreens[n].content.querySelector('section').cloneNode(true);
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

  screenChange();

}());
