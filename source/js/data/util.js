export const mainContainer = document.querySelector(`.app`);

export const getElementFromTemplate = (template, tag = `div`, className = `${tag}`) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerHTML = template;
  return element;
};

export const screenChange = (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen);
};

export const shuffle = function (arr) {
  let j = ``;
  let temp = ``;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export const getRandom = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const makeCounter = () => {
  let currentCount = 1;

  return {
    getNext() {
      return currentCount++;
    },
    reset() {
      currentCount = 1;
    }
  };
};

export const counter = makeCounter();
