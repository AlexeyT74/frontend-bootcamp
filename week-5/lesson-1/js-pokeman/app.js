function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1= new Pokemon("Slowking","Psychic",["Psybeam","Confusion","Amnesia"]);
const pokemon2 = new Pokemon("Eelektrik","Electric",["Charge Beam","Thunder Wave","Spark"]);
const pokemon3 = new Pokemon("Bellossom","Grass",["Absorb","Grassy Terrain","Petal Dance"]);

// A method called callPokemon will print the following: “I choose you, <pokemon name>"
Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`)
}

// A method called attack that takes one parameter, an attack number, that will print the specific attack
// method from the pokemonAttackList array as the following: “<pokemon name> used <attack method>”
Pokemon.prototype.attack = function(number){
    console.log(`${this.name} used ${this.attackList[number]}`);
}

pokemon1.callPokemon();
pokemon1.attack(3);
pokemon2.callPokemon();
pokemon2.attack(1);
pokemon3.callPokemon();
pokemon3.attack(2);