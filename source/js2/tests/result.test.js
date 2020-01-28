import {assert} from 'chai';
import {getResult} from "../modules/result";

let arr = [10, 15, 16, 18, 19, 20];

let result = [
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  },
  {
    'answer': 1,
    'time': 30
  }
];

const result2 = result.map((a) => Object.assign({}, a));
result2[0].time = 0;
result2[1].time = 0;
const result3 = result.map((a) => Object.assign({}, a));
result3[0].time = 0;
result3[0].answer = 0;
const result4 = result.map((a) => Object.assign({}, a));
result4[0].time = 25;
result4[0].answer = 0;
result4[1].answer = 0;


describe(`check getResults`, () => {
  it(`should return correct minutes`, () => {
    assert.equal(getResult(arr, result).minutes, 0);
    assert.equal(getResult(arr, result2).minutes, 1);
  });
  it(`should return correct seconds`, () => {
    assert.equal(getResult(arr, result3).seconds, 30);
    assert.equal(getResult(arr, result4).seconds, 5);
  });
  it(`should return correct procent`, () => {
    assert.equal(getResult(arr, result).procent, 100);
    assert.equal(getResult(arr, result3).seconds, 30);
  });
  it(`should return correct place`, () => {
    assert.equal(getResult(arr, result).place, 1);
    assert.equal(getResult(arr, result3).place, 4);
    assert.equal(getResult(arr, result4).place, 6);
  });
  it(`should return correct error`, () => {
    assert.equal(getResult(arr, result3).errors, 1);
    assert.equal(getResult(arr, result4).errors, 2);
  });
});
