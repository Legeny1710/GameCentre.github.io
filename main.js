const ButtonAudio = new Audio()
ButtonAudio.src = "./click.wav"


let QuizGame = document.querySelector(".QuizGame")
let TicTacToe = document.querySelector(".TicTacToe")
let RockPaperScissors = document.querySelector(".RockPaperScissors")
let GuessTheWord = document.querySelector(".GuessTheWord")



QuizGame.addEventListener("click", function() {
    ButtonAudio.play()
})

TicTacToe.addEventListener("click", function() {
    ButtonAudio.play()
})

RockPaperScissors.addEventListener("click", function() {
    ButtonAudio.play()
})

GuessTheWord.addEventListener("click", function() {
    ButtonAudio.play()
})