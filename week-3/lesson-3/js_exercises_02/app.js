// ********************** Exercise 19 *****************************

// For each of the questions below, answer the questions with this array:
// const people = ["Greg", "Mary", "Devon", "James"];
const people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a loop, iterate through this array and console.log all of the people.
for (let i=0; i<people.length; i++){
    console.log(people[i])
}

// 2. Write the command to remove "Greg" from the array.
people.shift();

// 3. Write the command to remove "James" from the array.
people.pop();

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");

// 5. Write the command to add your name to the end of the array.
people.push("Alexey");
console.log(people);

// 6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
for(let i=0; i<people.length; i++){
    let person = people[i];
    console.log(person);
    if ("Mary"==person){
        break;
    }    
}

// 7. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
const newPeople = people.slice(2);
console.log(newPeople);

// 8. Write the command that gives the indexOf where "Mary" is located.
let indMary = people.indexOf("Mary");
console.log(indMary);

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
let indFoo = people.indexOf("Foo");
console.log(indFoo);

// 10. Redefine the people variable with the value you started with. Using the splice command, 
// remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this 
// when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people[0] = "Greg";
people[3] = "James";
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat(["Bob"]);
console.log(withBob);


// ********************** Exercise 20 *****************************

// Write a function that will receive an array of strings and will return a new array containing all the lengths of all the strings in
// the array it got as a parameter. So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"] it will return this array: [3, 5, 3, 2].

function getLengths(strings){
    const ret = [];
    for(let i=0; i<strings.length; i++){
        ret.push(strings[i].length)
    }
    return ret;
}
console.log(getLengths(["boo", "doooo", "hoo","ro"]))


// ********************** Exercise 21 *****************************

// 1. Create an array containing 4 population values of 4 countries of your choice. Store this array into a variable called 'populations'
const populations = [9.364, 331.9, 37.75, 214]; // Israel, USA, Poland, Brazil
console.log(populations);

// 2. Create a function called ‘populationPercentages’ that takes the population array as an argument.
function populationPercentages(populations){

    // 3. Inside the function, create an empty array called ‘percentages’.
    let percentages = [];
    
    const percentageOfWorld = (population) => population / 7900 * 100;
    
    // 4. Use a for loop to iterate over the population array you received as an argument..
    for(let i=0; i<populations.length; i++){
        
        // 5. On each iteration use the function we created earlier (module 3, ex.3.3-declarations vs expressions) for each element of the array.
        // 6. Push the result to the ‘percentages’ array.
        percentages.push(percentageOfWorld(populations[i]))
    }

    // 7. Return from the function the ‘percentages’ array.
    return percentages;
}
console.log(populationPercentages(populations));


// ********************** Exercise 23 *****************************

// Create a function that received an array of integers as a parameter.
// Return a new array without any duplicates inside. You indexOf as part of your solution.
// Example: [3,4,4,3,6,3] --→ [3,4,6]

function removeDuplicates(numbers){
    const ret = [];
    for(let i=0; i<numbers.length; i++){
        const num = numbers[i];
        if(ret.indexOf(num)==-1){
            ret.push(num)
        }
    }
    return ret; 
}
console.log(removeDuplicates([3,4,4,3,6,3]))
