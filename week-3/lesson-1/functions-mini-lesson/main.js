people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  const getSummary = function(person){

    const capitalize = function(str) { return str[0].toUpperCase() + str.slice(1); }
    const getAge = function(number) { return (number<21 ? "underage" : number>55 ? "55+" : number+" year old")}
    const getPlace = function(country, city) {return capitalize(city)+", "+capitalize(country)}
    const getCatchPhrase = function(str) { return 'Loves to say "'+capitalize(str)+'".'}    
    const getProfession = function(str) {
        words = str.split(' ')
        let ret = ""
        for(word of words) ret+= capitalize(word) + ' '
        return ret
    }

    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` 
    summary += getProfession(person.profession)
    summary += 'from '+getPlace(person.country,person.city)+". "
    summary += getCatchPhrase(person.catchphrase)
    return summary;
  }

  for(person of people_info){
    console.log(getSummary(person))  
  }
  

// Exercise
const getWordCounts = function(text, specials){
    let wordDict = {}
    
    const addWord = function(word){
        if (wordDict[word]) {
            wordDict[word]++
        }
        else wordDict[word] = 1
    }

    const splitBySpecs = function(texts, spec){
        let ret = []
        for(let t of texts){
            ret = ret.concat(t.split(spec))
        }        
        return ret
    }

    text = text.toLowerCase()    
    let words = splitBySpecs([text],' ')
    for(let spec of specials){        
        words = splitBySpecs(words,spec)
    }
    
    for(let word of words){
        addWord(word)
    }   
  
    return wordDict;
}

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = getWordCounts(story,specialChars)

console.log(wordCounts)