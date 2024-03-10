console.log("Hello, world!")

let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10

console.log((5 > 2) && false) // false
console.log(!("knife" === "sword")) // true
console.log((1 < 2) || (-1 > -1) || !false) // true
console.log("") // false
console.log((31 % 5) == "1") // true
console.log(!!true) // true
console.log("5th Avenue" != "5th Avenue") // false
console.log('xxx')
console.log(52 !== "52") // true
console.log(undefined || null) // false

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

console.log("a="+a+", b="+b+" c="+c)

// Conditions
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(!boughtTesla){
    console.log("Are you interested in bying a Tesla?")
}
else if (!isUSCitizen){
    console.log("Would you like to move to the US?")
}
else if(currentYear-yearOfTeslaPurchase>=4){
    console.log("Would you like an upgrade?")
}
else {
    console.log("Are you satisfide?")
}

// Arrays
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2)
numbers[3]=1
numbers.splice(numbers.length-4,4)
numbers.unshift(0);
console.log(numbers)

// Objects
const p1={
    name:"Alice",
    age:18,
    city:"NY"
}
const p2={
    name:"Bob",
    age:81,
    city:"Toronto"
}

if (p1.age==p2.age) {
    if (p1.city==p2.city)   console.log(p1.name+" wanted to date "+p2.name)
    else console.log(p1.name+" wanted to date "+p2.name+", but couldn't")
}

let library={
    books: [
        {title: 'LOTR', author: 'JRT'},
        {title: 'Dune', author: 'Herbert'},
        {title: 'Smth', author: 'Unknown'}
    ]
}
console.log(library)

// Loops
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names){
    people.push( { name:names[i], age:ages[i] } )
}
console.log(people)

for(let p of people){
    console.log(p.name+" is "+p.age+" years old.")
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

for(let i in posts){
    if(posts[i].text.endsWith("DON'T BUY!")) posts.splice(i,1)
  }
console.log(posts)

const newPosts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]


  for (let post of newPosts){
    if (post.id==2){
        for (i in post.comments){
            if (post.comments[i].id==3){                
                post.comments.splice(i,1)
                break;
            }
        }
        break;
    }
  }
  console.log(newPosts)

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let dictKeys = Object.keys(dictionary)

  for(key of dictKeys){
    console.log("Words that begin with "+ key)
    for(word of dictionary[key]){
        console.log(word)
    }
  }
