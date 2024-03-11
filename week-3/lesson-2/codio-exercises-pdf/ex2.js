// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’

function countryInfo(country, population, capitalCity){
    
    const getPopulation = function(pop){
        return `${pop/1000000} million people`;
    }

    return country + " has " + getPopulation(population) +" and its capital city is "+capitalCity;
}

// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console.
let answ1 = countryInfo("Israel",9000000,"Jerusalem");
console.log(answ1);
let answ2 = countryInfo("USA",331000000,"Washington");
console.log(answ2);
let answ3 = countryInfo("Poland",37000000,"Warsaw");
console.log(answ3);