export const main = document.querySelector(`.app`);

export const getDomElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const screenChange = (template) => {
  main.innerHTML = ``;
  main.appendChild(template);
};

