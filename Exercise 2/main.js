// Variable declarations
let a = 15;
let b = "15";

// 1. Equal to (Loose Equality) - Checks value only, performs type coercion
console.log("a == b :", a == b);   // true

// 2. Strict Equal to - Checks both value and type
console.log("a === b :", a === b); // false

// 3. Not Equal to (Loose Inequality) - Checks value only after coercion
console.log("a != b :", a != b);   // false

// 4. Strict Not Equal to - Checks if value or type are different
console.log("a !== b :", a !== b); // true

// 5. Greater than
console.log("a > b :", a > b);     // falsegit 

// 6. Greater than or equal to
console.log("a >= b :", a >= b);   // true (because 15 is equal to 15)

// 7. Less than
console.log("a < b :", a < b);     // false

// 8. Less than or equal to
console.log("a <= b :", a <= b);   // true (because 15 is equal to 15)