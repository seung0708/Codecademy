/* I want to create a message about mental health. 
    The generator should generate a random message and concatenate user's name to generate a personal message
    Example: "John, you are worth of happiness and peace of mind"
*/

//1. Get the user's name
const prompt = require('prompt-sync')({sigint: true});
const name = prompt("What is your name? ");
//2. Generate a random number
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const quotes = [
    "your mental health is just as important as your physical health",
    "it's okay not to be okay",
    "you are not your mental illness",
    "your struggles do not define you", 
    "taking care of your mental health is an act of self-love",
    "there is no shame in seeking help for your mental health",
    "it's okay to take a break and prioritize your mental health",
    "you are not alone in your struggles",
    "it's okay to ask for support when you need it"
]

const length = quotes.length;
let index = generateRandomNumber(length);
//3. Generate personal message 
const peronsalMessage = (randomIndex, userName) => {
    console.log(`${userName}, ${quotes[randomIndex]}`);
}

peronsalMessage(index, name);

//4. Ask for more quotes
let answer = prompt("Would like to read more? ");

while (answer === "yes") {
    index = generateRandomNumber(length);
    peronsalMessage(index, name);
    answer = prompt("Would like to read more? ");
}


