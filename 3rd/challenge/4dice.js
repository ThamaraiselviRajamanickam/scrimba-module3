
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    let randomNum=Math.floor(Math.random()*6)+1;
    return randomNum
}
console.log(rollDice())