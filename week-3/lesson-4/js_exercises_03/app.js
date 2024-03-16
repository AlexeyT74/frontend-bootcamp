// *********************** Exercise 27 ************************

// Create a function that takes one argument, an array.
// Use this array: const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the letter as the key and the letter count as the value.
// Expected output: { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 1, m: 2, t: 1, b: 1, s: 1 }
// Note: that it shouldn’t be case sensitive
// Extra: return the letter with the most occurrences as well

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(strings){
    let ret = {};
    for (let i=0; i<strings.length; i++){
        let word = strings[i].toLowerCase().split('');
        console.log(word);
        for (let j=0; j<word.length; j++){
            const letter = word[j];
            if (letter != ' '){
                if(ret.hasOwnProperty(letter)){
                    ret[letter]++;
                }
                else {
                    ret[letter]=1;
                }
            }
        }
    }
    return ret;
}
const letters = countLetters(array);
console.log(letters);

function getMostFrequentLetter(letters){
    let maxCount = 0;
    let ret = ''
    for (i in letters){
        const count = letters[i];
        if (count > maxCount){
            maxCount = count;
            ret = i;
        }
    }
    return ret;
}
const maxUsedLetter = getMostFrequentLetter(letters);
console.log(`The letter with the most occurrences is "${maxUsedLetter}"`)

// *********************** Exercise 28 ************************

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// Create a function that takes these two arrays as arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.
function getDuplicates(first, second){
    const ret = [];
    for (let i=0; i<first.length; i++){
        for (let j=0; j<second.length; j++){
            if  (first[i]==second[j]){
                ret.push(first[i])
            }
        }
    }
    return ret;
}
const duplicates = getDuplicates( food, food1)
console.log(duplicates);


// *********************** Exercise 29 ************************

// Write a function that has one argument, a positive integer. Let's call it N.
// The function should console log a step shape. 
// With N levels using the # character. Make sure the step has spaces on the right-hand side if empty!
// Ninja: You are not allowed to use the repeat method. Use 2 loops instead

function printShapes(N){
    for (let i=1; i<=N; i++){
        let toPrint ='';
        for (let j=1; j<=i; j++){
            toPrint += '#';
        }
        for (let k=i+1; k<=N; k++){
            toPrint += ' ';
        }
        console.log(toPrint);
    }
}
printShapes(4);

// *********************** Exercise 30 ************************

// 1. Write a function called ‘isString’ that receives 2 arguments, a string and a callback function.
// The function checks that the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the console.

function isString(string, callback){
    if(typeof string == "string"){
        callback(string);
    }
}
isString("Test String", console.log);

// 2. Create a function called ‘firstWordUpperCase’ that receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence and pass the string to a callback function which will create
// dashes between the words. 
function firstWordUpperCase(string, callback){
    let capitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return callback(capitalized);
}

function replaceWithDashes(string){
    return string.split(' ').join('-');
}

// 3. Call the ‘firstWordUpperCase’ function with a callback of your choice.
const dashedString = (firstWordUpperCase( "all you need is love", replaceWithDashes));
console.log(dashedString);

// 4. Create your own function that will receive from one of its arguments a callback function
function logResult(value,callback){
    const ret = callback(value);
    console.log(`${callback.name}(${value})=${ret}`);
}
logResult(55,Math.cos);



// *********************** Exercise 31 ************************

const arrayEx31 = [10, 11, 251, 23, 0, -19, 57, 84, 17, 10, 2, 5, 99];
console.log(arrayEx31);

// Write the following functions using the reduce built-in function.
// 1. max
const max = arrayEx31.reduce(((accum,value) => (value>accum ? value : accum)));
console.log(`Max value: ${max}`);

// 2. the sum of even numbers
const sumOfEven = arrayEx31.reduce(((accum,value) => (value%2==0 ? accum+value : accum)));
console.log(`Sum of even numbers: ${sumOfEven}`);

// 3. average
const average = arrayEx31.reduce(((accum,value) => (accum+value)))/arrayEx31.length;
console.log(`Average value: ${average}`);
