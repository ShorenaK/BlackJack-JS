let sum = 0 // updated in the kikkOff function
let sumDlCards = 0
let hasBlackJack = false// game has not started no blackjack
let isInGame = false // game has not started so palyer is not in game
let messageDl = '' // dealer's Balck Jack message
let message = '' // empty string will be updated in the functione
let cardDeck = [] // empty array for the player's card
let cardDeckDl = [] // empty array for the Delealr's card
let player = {
  name: 'Player',
  chips: 1000
}
let displaymessage = document.querySelector('#message')
let displaymessageDl = document.querySelector('#message-dealer')
let totalTag = document.getElementById('total')
let totalDl = document.getElementById('dealer_total')
let cardsTag = document.querySelector('#player-card')
let dlCardsTag = document.querySelector('#dealer_card')
let playerTag = document.querySelector('#player_chips')
// shuffling the deck of cards from 1 - 13
function shuffleNewCard(){
  let randomNum = Math.floor(Math.random() * 13) + 1
  if (randomNum > 10){
  return 10 // kings / Jack / Queen
  } else if (randomNum === 1){
  return 11 // Ace
  }else{
  return randomNum // rest  of deck of cards
  }
}
function kickOffGame() {
  // player is inGame / true/ and add the generating the cards/ sum
  isInGame = true
  let cardOne = shuffleNewCard() // player's cards
  let cardTwo = shuffleNewCard()
  cardDeck = [cardOne, cardTwo]
  sum = cardOne + cardTwo
  let cardOneDl = shuffleNewCard() // dealer's card
  let cardTwodDl = shuffleNewCard()
  cardDeckDl = [cardOneDl, cardTwodDl]
  sumDlCards = cardOneDl + cardTwodDl

  renderGame()
}
// function to dipslay the messages and renders the game / heart of the game
function renderGame (){
  dlCardsTag.textContent = `Dealer's Cards:`
  cardsTag.textContent = `Player's Cards: `
for (i = 0; i < cardDeck.length; i ++){
      cardsTag.textContent = `${cardsTag.textContent}  ${cardDeck[i]}`
  }
for (i = 0; i < cardDeckDl.length; i ++){
  dlCardsTag.textContent =  `${dlCardsTag.textContent}  ${cardDeckDl[i]}`
  }
  totalDl.textContent = `Total: ${sumDlCards}`
  totalTag.textContent = `Total: ${sum}`
  message = ''
  messageDl = ''
if(sumDlCards === 21){
  messageDl = 'Table Wins Black Jack!!!'
  message = 'Player lost!'
  player.chips = player.chips - chips
  isInGame = false
  } else if(sum === 21){
  message = 'Player wins Black Jack!!!'
  player.chips += chips
  hasBlackJack = true
  }else if(sum === sumDlCards){
  messageDl = `It's TIE`
  message = `It's TIE`
  }else if(sum <= 20){
  isInGame = true
  message = 'Would you like to hit?'
  }else if (sum > 21) {
  message = " Bust! You lost a Bet!"
  player.chips = player.chips - chips
  isInGame = false
}
 displaymessageDl.textContent = messageDl
 displaymessage.textContent = message
 playerTag.textContent = `${player.name} has ${player.chips} chips`
}
function newCard(){
  // if the palyer has lost cannot picked the new card
  // while player isInGame is able to pick the card
if (isInGame === true && hasBlackJack !== true){
  let card = shuffleNewCard()
  sum += card
  cardDeck.push(card)
  renderGame()
 }
}
