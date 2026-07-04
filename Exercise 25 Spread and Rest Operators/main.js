const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Isticmaalka Spread Operator
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Waxay soo saari doontaa: [1, 2, 3, 4, 5, 6]

function multiply(...numbers) {
  // Haddii aan wax nambar ah la soo siin, ha soo celiyo 0
  if (numbers.length === 0) return 0; 
  
  return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Tusaalooyin:
console.log(multiply(2, 3));       // 2 * 3 = 6
console.log(multiply(2, 3, 4));    // 2 * 3 * 4 = 24
console.log(multiply(1, 5, 2, 3)); // 1 * 5 * 2 * 3 = 30