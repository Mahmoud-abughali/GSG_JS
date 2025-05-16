let player = {
  name: "Player",
  chips: 200
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let playerEl = document.getElementById("player");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "get out losser! 😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
