// ************** Exercise 7 ********************

// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
const welcome = function(){
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
console.log(welcome());

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }
const power = a => Math.pow(a, 2)
console.log(power(5));

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
(function squareRoot(a){ 
    return Math.sqrt(a);
})();


// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function randomNumbers(a, b){
    return Math.random()*(a-b)+b;
})();


// ************** Exercise 8 ********************

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the percentage of the world population that the given
// population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into
// variables and log them to the console.
// 4. Create a function expression that does the exact same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same populations)

function percentageOfWorld1(population){
    return population / 7900 * 100;
}
let popIsrael = percentageOfWorld1(9.364);
let popUSA = percentageOfWorld1(331.9);
let  popPoland = percentageOfWorld1(37.75);
console.log(popIsrael,popUSA,popPoland);

const percentageOfWorld2 = (population) => population / 7900 * 100;
popIsrael = percentageOfWorld1(9.364);
popUSA = percentageOfWorld1(331.9);
popPoland = percentageOfWorld1(37.75);
console.log(popIsrael,popUSA,popPoland);