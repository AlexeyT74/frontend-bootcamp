// **************** Exercise 10 ***********************

// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

function getScore(number){
    if (number <= 64) return "F"
    else if (number <= 69) return "D"
    else if (number <= 79) return "C"
    else if (number <= 89) return "B"
    else if (number <= 100) return "A"
    else return null;
}

console.log(`Score of 50 is ${getScore(50)}`)
console.log(`Score of 67 is ${getScore(67)}`)
console.log(`Score of 73 is ${getScore(73)}`)
console.log(`Score of 85 is ${getScore(85)}`)
console.log(`Score of 91 is ${getScore(91)}`)


// **************** Exercise 11 ***********************

// John and Mike both play basketball on different teams. In the latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account that there might be a draw (the same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

function getAverageScore(first, second, third){
    return (first + second + third ) / 3;
}
let scoreJohn = getAverageScore(89, 120, 103);
let scoreMike = getAverageScore(116, 94, 123);
console.log(getWinner(scoreJohn,"John",scoreMike,"Mike")); // Mike

scoreJohn = getAverageScore(112, 120, 103);
console.log(getWinner(scoreJohn,"John",scoreMike,"Mike")); // John

scoreJohn = getAverageScore(110,120,103);
console.log(getWinner(scoreJohn,"John",scoreMike,"Mike")); //Draw

function getWinner(score1, name1, score2, name2){
    ret = `${name1} scored ${score1.toFixed(1)}, ${name2} scored ${score2.toFixed(1)}, `;
    if (score1==score2) {
        ret+="it's a draw!"
    } else {
        ret+= "the winner is ";
        ret+= (score1>score2) ? name1 : name2;    
    }
    return ret;
}

let scoreMary = getAverageScore(75, 144, 130); // Mary
console.log(getWinner3(scoreJohn,"John",scoreMike,"Mike",scoreMary,"Mary"))

scoreJohn = getAverageScore(112, 120, 153); // John
console.log(getWinner3(scoreJohn,"John",scoreMike,"Mike",scoreMary,"Mary"))

scoreMike = getAverageScore(116, 194, 123); // Mike
console.log(getWinner3(scoreJohn,"John",scoreMike,"Mike",scoreMary,"Mary"))

function getWinner3(score1, name1, score2, name2, score3, name3){
    ret = `${name1} scored ${score1.toFixed(1)}, ${name2} scored ${score2.toFixed(1)}, ${name3} scored ${score3.toFixed(1)}, `;
    if ((score1==score2) && (score1==score3)) {
        ret+="it's a draw!"
    } else {
        ret+= "the winner is ";
        ret+= ((score1>score2)&&(score1>score3)) ? name1 : (score2>score3) ? name2 : name3;    
    }
    return ret;
}


// **************** Exercise 12 ***********************

// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOM-BOOM”
// If either of the above cases prints the number.
// Example of numbers between 1 to 18: 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
// Hint: Use the includes method to find out if the number includes a 7.

function boom(number){
    let ret = "";
    for (let i=1; i<=number; i++){
        if (i%7==0){
            if (i.toString().includes(7)){
                ret += "BOOM-BOOM";
            }
            else{
                ret += "BOOM"
            }
        } else {
            ret += i;
        }
        ret +=","
    }
    return ret.slice(0,-1); // removes ending ','
}
console.log(boom(1));
console.log(boom(10));
console.log(boom(72));


// **************** Exercise 13 ***********************

// Create a JS function to determine whether or not a given year is a leap year. The function should take a year as an argument:
// 1. Determine whether or not it is a leap year
// ● If the given year is a leap year, the program should print "It is indeed a leap year",
//  therwise the program will print "This is not a leap year."
// Help: every year that is divisible by 4 is a leap year except for the ones that are also divisible by 100 unless it is divisible by 400.
// Example: 2012 is the leap year 2100 is not But 2400 is.

function checkLeapYear(year){
    if (year%4==0){
        if (year%100==0){
            if (year%400==0){
                console.log("It is indeed a leap year");                
            }
            else console.log("This is not a leap year.")
        }
        else console.log("It is indeed a leap year");                
    } else console.log("This is not a leap year.")
}
checkLeapYear(2012) // Leap
checkLeapYear(2100) // Not leap
checkLeapYear(2400) // Leap


// **************** Exercise 14 ***********************

// 1. Create a function called ‘countryToLiveIn’ that takes 4 parameters:
// language, isIsland, population, and country. isIsland’s argument value should be true or false. 
// population’s argument value should be an integer. country should be a string of a country. Language should be a string.
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less
// than 50 million people, and is not an island.
// 3. Write an if statement inside your function to help Sarah figure out if your country is right for her. You will need to
// write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary. 
// 4. If yours is the right country, log a string like this: 'You should live in Finland. If not, log 'Finland does not meet your criteria'.
// 5. If your country does not meet all the criteria, go back and temporarily change some argument values in order to make the condition true.

function countryToLiveIn(language, isIsland, population, country){
    readyToLiveIn = (language=='English')&&(!isIsland)&&(population<50);
    console.log( readyToLiveIn ? `You should live in ${country}` : `${country} does not meet your criteria`)
}
countryToLiveIn("Finnish",false,5,"Finland");
countryToLiveIn("Portugez",false,214,"Brazil");
countryToLiveIn("English",true,67,"United Kingdom");
countryToLiveIn("English",false,331,"USA");
countryToLiveIn("English",false,38,"Canada");


// **************** Exercise 15 ***********************

// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the given 'language':
// ● mandarin: 'MOST number of native speakers!'
// ● Spanish: '2nd place in a number of native speakers'
// ● English: '3rd place'
// ● Hindi: 'Number 4'
// ● Arabic: '5th most spoken language'
// ● for all others simply log 'Not in the top 5'

function getLanguagePopulatiry(language){
    switch(language){
        case "mandarine" : 
            console.log("MOST number of native speakers!");
            break;
        case "Spanish":
            console.log("2nd place in a number of native speakers");
            break;
        case "English":
            console.log("3rd place");
            break;
        case "Hindi":
            console.log("Number 4");
            break;
        case "Arabic":
            console.log("5th most spoken language");
            break;
        default:
            console.log("Not in the top 5");
            break;
    }    
}
getLanguagePopulatiry("mandarine");
getLanguagePopulatiry("Hebrew");