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
arr5[2].answer = 0;

const test1 = pointsCounter(arr);
const test2 = pointsCounter(arr2);
const test3 = pointsCounter(arr3);
const test4 = pointsCounter(arr4);
const test5 = pointsCounter(arr5);


describe(`check pointsCounter`, () => {
  it(`should return correct points`, () => {
    assert.equal(test1.points, 20);
    assert.equal(test2.points, 16);
    assert.equal(test3.points, 19);
    assert.equal(test4.points, 15);
  });
  it(`should return -1 if there are less than 10 answers`, () => {
    assert.equal(test5.points, -1);
  });
  it(`sould return correct time`, () => {
    assert.equal(test1.timeLeft, 40);
    assert.equal(test3.timeLeft, 35);
  });
  it(`sould return correct fast answer number`, () => {
    assert.equal(test3.fast, 9);
    assert.equal(test4.fast, 8);
  });
});
