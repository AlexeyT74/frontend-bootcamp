const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like "+food)
    }
  }

// person.speak() //and this? Try it out!
person.speak("cheese toast")


// Ex 1
const isEven = function(number){
    return (number%2)==0
}
console.log("20 is even? - "+isEven(20))
console.log("21 is even? - "+isEven(21))

// Ex 2
const printOdd = function(numbers){
    for(number of numbers){
        if (!isEven(number)) console.log(number)
    }
}
const testNumbers = [1,5,10, 12, 7, 2, 16, 61, 34, 55]
printOdd(testNumbers)

// Ex 3
const checkExists = function(numbersArray,lookUpNumber){
    for(number of numbersArray){
        if(number===lookUpNumber) return true;        
    }
    return false;
}
console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))

// Ex 4
let calculator = {
    add: function(one, two){ return one+two}, 
    subtract: function(one, two){ return one-two}
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2)) //should print 42

// Ex 5
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")

    function makeRegal(name){ return "His Royal Highness, "+name}
    function increaseByNameLength(money, name){ return money*name.length}
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"