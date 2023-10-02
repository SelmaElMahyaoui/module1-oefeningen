import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen : ')) ;

let aantalUren = parseFloat(await userInput.question('Geef het aantal uren: '))

let aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten: '))

let aantalSeconden = parseFloat (await userInput.question('Geef het aantal seconden: '))

let totaal = ((aantalDagen * 60 * 60 * 24) + (aantalUren * 60 * 60)+ (aantalMinuten * 60) + aantalSeconden);
console.log('Aantal seconden:' + totaal);
process.exit();