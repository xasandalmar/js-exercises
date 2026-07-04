const fruits = ["apple", "banana", "cherry"];

const lengths = fruits.map(function(fruit) {
  return fruit.length;
});

console.log(lengths); // Waxay soo saari doontaa: [5, 6, 6]

const fruits = ["apple", "banana", "cherry"];
const lengths = fruits.map(fruit => fruit.length);

console.log(lengths); // Waxay soo saari doontaa: [5, 6, 6]