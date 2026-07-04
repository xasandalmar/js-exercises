const numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce(function(accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

console.log(product); // Waxay soo saari doontaa: 120

const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(product); // Waxay soo saari doontaa: 120