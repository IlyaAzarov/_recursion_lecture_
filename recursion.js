console.clear();
const arrayExpl = [1, , , , , 5, , 1, 0, , , ,];

// console.log(arrayExpl);

const fillerSymbol = 'Z';

const recFoo = (arr) => {
  const length = arr.length;
  let i = 0;
  while (i < length) {
    if (!arr[i]) {
      arr[i] = fillerSymbol;

      console.log(arr);

      recFoo(arr);
      // console.log('undefined!!!');
    }
    i++;
  }
};

recFoo(arrayExpl);
// console.log(' arrayExpl = ', arrayExpl);
