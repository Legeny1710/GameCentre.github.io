let player = {
    Name: "Player",
    Chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*15) + 1
    return randomNumber
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 29) {
        message = "Wanna draw a new card!"
    } else if (sum === 30) {
        message = "It is 30, You WON!!!"
    } else {
        message = "You're out of game!"
        isAlive = false
    }
   messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let ncard = getRandomCard()
        sum += ncard
        cards.push(ncard)
        renderGame()
    }

}


