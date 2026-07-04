function calculateArea(width, height = width) {
  return width * height;
}

// Tusaale 1: Markii la siiyo width iyo height labadaba (Laydi/Rectangle)
console.log(calculateArea(5, 10)); // 5 * 10 = 50

// Tusaale 2: Markii la siiyo width oo keliya (Labajibaaran/Square)
console.log(calculateArea(6));     // 6 * 6 = 36