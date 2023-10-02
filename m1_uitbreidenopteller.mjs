import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let Getal1 = "1"
let Getal2 = 2

let som = Getal1 + Getal2
console.log (som)
let verschil = Getal1 - Getal2
console.log (verschil)
let product = Getal1 * Getal2
console.log (product)
let deling = Getal1 / Getal2
console.log(deling)



process.exit();
