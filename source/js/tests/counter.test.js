import {assert} from 'chai';
import pointsCounter from "../modules/counter";

let arr = [
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  },
  {
    'answer': 1,
    'time': 26
  }
];

const arr2 = arr.map((a) => Object.assign({}, a));
arr2[0].answer = 0;
const arr3 = arr.map((a) => Object.assign({}, a));
arr3[0].time = 31;
const arr4 = arr.map((a) => Object.assign({}, a));
arr4[0].answer = 0;
arr4[1].time = 31;
const arr5 = arr.map((a) => Object.assign({}, a));
arr5.shift();


describe(`check pointsCounter`, () => {
  it(`should return correct number`, () => {
    assert.equal(pointsCounter(arr), 20);
    assert.equal(pointsCounter(arr2), 16);
    assert.equal(pointsCounter(arr3), 19);
    assert.equal(pointsCounter(arr4), 15);
    assert.equal(pointsCounter(arr4), 15);
  });
  it(`should return -1 if there are less than 10 answers`, () => {
    assert.equal(pointsCounter(arr5), -1);
  });
});
