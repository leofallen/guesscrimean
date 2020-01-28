const makeCounter = () => {
  let currentCount = 1;

  return {
    getNext() {
      return currentCount++;
    },
    set(value) {
      currentCount = value;
    },
    reset() {
      currentCount = 1;
    }
  };
};

const counter = makeCounter();

export default counter;
