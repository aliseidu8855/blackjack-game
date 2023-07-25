const player = {
    name: "Ali",
    chips: 145,
  };
  let cards = [];
  let sum = 0;
  let hasBlackjack = false;
  let isAlive = false;
  let message = " ";
  const messageEl = document.getElementById("message-el");
  const sumEl = document.getElementById("sum-el");
  const cardsEl = document.getElementById("cards-el");
  const playerEL = document.getElementById("player-el");
  playerEL.textContent = player.name + ": $" + player.chips;
  
  function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 11) {
      return 10;
    } else if (randomNumber === 1) {
      return 11;
    } else {
      return randomNumber;
    }
  }
  
  function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
  
  function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
      message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
      message = "You've got Blackjack! ";
      hasBlackjack = true;
    } else {
      message = "You're out of the game! ";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
  
  function newCard() {
    if (isAlive === true && hasBlackjack === false) {
      let thirdCard = getRandomCard();
      sum += thirdCard;
      cards.push(thirdCard);
      renderGame();
    }
  }
  