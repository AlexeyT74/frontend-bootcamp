// ************* Exercise 3 ************* 

// 1. Write a function named `tellFortune` that takes 4 parameters:
// jobTitle, location, partnerName, numberOfChildren.
// Based on this output the function returns a string with this format:
// ‘You will be a programmer in New York married to Rana with 2 children’.

function tellFortune(jobTitle, location, partnerName, numberOfChildren){
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren ? numberOfChildren : "no"} children`;
}

console.log(tellFortune("frontend developer","Tel Aviv","Sarah",5))
console.log(tellFortune("fullstack developer","Haifa","Moshe",0))


// ************* Exercise 4 ************* 

// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.
function getCircleArea(radius){
    return Math.PI*radius*radius;
}

let circleRadius = 5;
let circleArea = getCircleArea(circleRadius);
console.log(`An area of a circle with a radius of ${circleRadius} is ${circleArea}`);
console.log("Rounded value of the area is "+circleArea.toFixed(2))

// *************** Exercise 5 ****************

// 1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 4. Current Year e.g 2021
// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’

function getCurrentDate(){
    const today = new Date(); // now!;
    const month = function(date){ 
        return date.toLocaleString('en-US', { month: 'long' });
    }
    const day = function(date){
        return date.toLocaleString('en-US', { weekday: 'long' });
    }

    return `Today is ${day(today)} the ${today.getDate()} of ${month(today)} ${today.getFullYear()}`;
}
console.log(getCurrentDate());

// ************** Exercise 6 ********************

// From function declarations to function expressions

// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
const welcome = function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
console.log(welcome())

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }
const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
console.log(power(77))

// function add(a, b = 5) {    
// let myNumber = a;
// let sum = myNumber + b;
// return sum;
// }
const add = function(a, b = 5) {    
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
console.log(add(4,-12));
console.log(add(8.3))

// From function expressions to function declarations

// const hello = () => "Hello!";
function hello(){
    return "Hello!";
}
console.log(hello())

// const squareRoot = a => Math.sqrt(a);
function squareRoot(a){
    return Math.sqrt(a);
} 
console.log(squareRoot(36));

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b){
    return Math.random() * (a - b) + b;
}
console.log(randomNumbers(1,3));