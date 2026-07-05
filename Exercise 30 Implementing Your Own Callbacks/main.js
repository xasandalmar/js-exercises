// 1. Function-ka weyn (Higher-Order Function) ee aqbalaya callback-ga
function operate(num1, num2, callback) {
    return callback(num1, num2);
}

// 2. Callback function-ka 1aad: Isku dhufashada (Multiplication)
function multiply(a, b) {
    return a * b;
}

// 3. Callback function-ka 2aad: Isku qaybinta (Division)
function divide(a, b) {
    if (b === 0) {
        return "Error: Ma dhici karto in nambar 0 loo qaybiyo!";
    }
    return a / b;
}

// --- FULINTA KOODHKA IYO LOGGING-KA ---

// Isticmaalka Multiply
const productResult = operate(6, 4, multiply);
console.log("Natiijada isku dhufashada (6 * 4):", productResult); // Output: 24

// Isticmaalka Divide
const quotientResult = operate(20, 5, divide);
console.log("Natiijada isku qaybinta (20 / 5):", quotientResult); // Output: 4

// Tusaale kale oo Divide ah (haddii 0 lagu qaybiyo)
const errorResult = operate(10, 0, divide);
console.log(errorResult); // Output: Error: Ma dhici karto in nambar 0 loo qaybiyo!