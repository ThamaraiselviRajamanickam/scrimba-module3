let player={
    name:"selvi",
    chips:123
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message="";
let cards = [firstCard, secondCard]
let hardCard=11
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("card-el");
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ":" + " "+ "$" + player.chips

function getRandomCard(){
    
      // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}



function renderGame(){
if(sum<=20){
    message="Do you want to draw a new card? 🙂"
} else if(sum==21){
    message="Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true

}else{
   message="You're out of the game! 😭"
    isAlive = false

}
messageEl.textContent=message;
sumEl.textContent= "Sum: " +sum;
cardsEl.textContent = "Cards: "
for(i=0;i<cards.length;i++){
cardsEl.textContent += cards[i] + " "
}


}
function newCard(){
    if(isAlive===true && hasBlackJack === false){
    console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
    sum += card;

    cards.push(card);
    console.log(cards)
    renderGame()
    }
}