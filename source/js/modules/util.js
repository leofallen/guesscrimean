
export const container = document.querySelector(`.app`);

export const getDomElement = (template, tag = `div`, className = `wrapper`) => {
  const wrapper = document.createElement(tag);
  wrapper.classList.add(className);
  wrapper.innerHTML = template;
  return wrapper;
};

export const screenLoad = (template) => {
  container.innerHTML = ``;
  container.appendChild(template);
};

export const getRandom = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const initialState = {
  'minutes': 4,
  'seconds': 59,
  'mistakes': [],
};

export const resetCheckboxes = () => {
  const checkBoxses = document.querySelectorAll(`input[type=checkbox]`);
  const answerButton = document.querySelector(`button[type=submit]`);
  answerButton.setAttribute(`disabled`, `true`);
  checkBoxses.forEach((it) => {
    if (it.checked) {
      it.checked = false;
    }
  });
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

// export const renderScreen = (state) => {

// };
