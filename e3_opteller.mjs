// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let Getal1 = parseFloat (await userInput.question('Geef een getal:'));
let Getal2 = parseFloat (await userInput.question('Geef een tweede getal:'));

console.log('De som van jouw twee getallen is:' + (Getal1 + Getal2));


process.exit();
