"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + goodForTheJob(falcon));
/*class Spacecraft {
   constructor(public propulsor: string){}

   jumpIntoHyperspace() {
     console.log(`Entering hyperspace with ${this.propulsor}`)
   }
}

let ship  = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MilleniumFalcon extends Spacecraft implements Containership {
cargoContainers: number
  constructor() {
    super('hyperdrive')
    this.cargoContainers = 2
  }

  jumpIntoHyperspace() {
    if (Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    }else{
      console.log('Failed to jump into hyperspace')
    }
  }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {
  cargoContainers: number
}

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2
console.log(`Is Falcon good for the job? ${goodForTheJob(falcon)}`)*/
/*let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log(episode)
episode = episode + 1
console.log(episode)

//variavel com tipo 'any'
//let favoriteDroid
let favoriteDroid: string
favoriteDroid = 'BB-8'
//aceita diferentes tipos considerando a ultima modificação
//favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)

//Funções
console.log("FUNCTIONS")
let isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'} `)

//Arrow Function
console.log("ARRROW FUNCTION")
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

//Função com parametros padrões
console.log("OPTIONAL ATTRIBUTE FUNCTION")
function inc (speed: number, inc: number = 1) : number {
  return speed + inc
}
console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)*/
