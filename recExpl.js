const fileSystem = [
  'f',
  ['d', [3, [, 3, [, 3, 5, [, 33, 44, 55, [, , , , 'pass.txt']]], 5, 6]], 99],
  88,
];

const targetName = 'pass.txt';
let continueSearch = true;
let deepCounter = 0;

const searchPassFile = (arr) => {
  console.log(++deepCounter);
  const length = arr.length;
  let i = 0;

  while (i < length && continueSearch) {
    const currentEl = arr[i];
    if (Array.isArray(arr[i])) {
      // если нашли массив
      searchPassFile(arr[i]);
    } else {
      console.log(i, '->', arr[i]);
      if (arr[i] === targetName) {
        continueSearch = false;
        console.log('Find a Target!');
        return;
      }
    }
    i++;
  }
};

searchPassFile(fileSystem);

// console.log();

// const obj = {
//   value1: 222,
//   value2: 222,
//   value3: 'pass.txt',
// };

// const tryObj = Object.values(obj);
// if (Array.isArray(tryObj)) {
//   console.log('Try to Iterate!!!');
// }
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
