import pointsCounter from "./counter";

// const getDeclension = (int) => {
//   let words = {
//     'minutes': `минут`,
//     'seconds': `сукунд`,
//     'points': `бал`,
//     'fast': `быстр`,
//     'error': `ошиб`,
//   };

//   let dictOne = [`2`, `3`, `4`];
//   let dictTwo = [`12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`];
//   let arr = String(int).split(``);

//   let checkOne = (
//     arr[arr.length - 1] === `1`
//     && arr[arr.length - 2] !== `1`
//   );

//   let checkTwo = (
//     dictOne.includes(arr[arr.length - 1])
//     && !dictTwo.includes(`` + arr[arr.length - 2] + arr[arr.length - 1] + ``)
//   );

//   let word = `Компьют`;

//   if (checkOne) {
//     words.fast = words.fast + `ый`;
//     words.error = words.error + `ка`;
//   } else if (checkTwo) {
//     return word + `ера`;
//   }
//   return words;
// };

export const getResult = (otherResults, results) => {
  let currentResults = pointsCounter(results);
  otherResults.push(currentResults.points);
  otherResults.sort((a, b) => {
    return a - b;
  });

  let genResults = Array.from(new Set(otherResults));

  return {
    'minutes': Math.round(currentResults.timeLeft / 60),
    'seconds': currentResults.timeLeft % 60,
    'procent': Math.round(genResults.indexOf(currentResults.points) / genResults.length) * 100,
    'place': genResults.length - genResults.indexOf(currentResults.points),
    'errors': currentResults.error,
    'points': currentResults.points,
    'fast': currentResults.fast,
    'players': genResults.length,
  };
};
