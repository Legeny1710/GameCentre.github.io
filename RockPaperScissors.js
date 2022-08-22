let rockbtn = document.getElementById("rockBtn");
let paperbtn = document.getElementById("paperBtn");
let scissorsbtn = document.getElementById("scissorsBtn");
let userChoice;
let computerchoice;
let choices;
let result = document.getElementById("result");
let userResult = document.getElementById("userPoints");
let computerResult = document.getElementById("computerPoints");
let userPoint = 0;
let computerPoint = 0;
let start = document.getElementById("start")
let message = document.getElementById("message")
let winnerUser = document.getElementById("winnerUser")
let winnerComputer = document.getElementById("winnerComputer")
let loser = document.getElementById("loser")
let startNewGameBtn = document.getElementById("startNewGame")
startNewGameBtn.disabled = true


function game(){
    rockbtn.addEventListener("click", function(){
        start.textContent = ""
        message.textContent = ""
        userChoice = rockbtn.value
        console.log(userChoice)
        choices = ['rock','paper','scissors']
        computerchoice = choices[Math.floor(Math.random()*3)]
        console.log(computerchoice)
        winnerRock()
        overallWinnerUser()
        overlallWinnerComputer()
    })

    paperbtn.addEventListener("click", function(){
        start.textContent = ""
        message.textContent = ""
        userChoice = paperbtn.value
        console.log(userChoice)
        choices = ['rock','paper','scissors']
        computerchoice = choices[Math.floor(Math.random()*3)]
        console.log(computerchoice)
        winnerPaper()
        overallWinnerUser()
        overlallWinnerComputer()
    })

    scissorsbtn.addEventListener("click", function(){
        start.textContent = ""
        message.textContent = ""
        userChoice = scissorsbtn.value
        console.log(userChoice)
        choices = ['rock','paper','scissors']
        computerchoice = choices[Math.floor(Math.random()*3)]
        console.log(computerchoice)
        winnerScissors()
        overallWinnerUser()
        overlallWinnerComputer()
    })



    function winnerRock (){
        if (userChoice === "rock" && computerchoice === "rock"){
            result.textContent = "Draw! Computer chose rock as well!"
        } else if(userChoice === "rock" && computerchoice === "paper"){
            result.textContent = "Computer gets a point! Computer chose paper!"
            computerPoint += 1
        } else if(userChoice === "rock" && computerchoice === "scissors"){
            result.textContent = "User gets a point! Computer chose scissors!"
            userPoint += 1
        }

        userResult.textContent = "User Score: " + userPoint
        computerResult.textContent = "Computer Score: " + computerPoint

    }

    function winnerPaper(){
        if (userChoice === "paper" && computerchoice === "paper"){
            result.textContent = "Draw! Computer chose paper as well!"
        } else if(userChoice === "paper" && computerchoice === "rock"){
            result.textContent = "User gets a point! Computer chose rock!"
            userPoint += 1
        } else if(userChoice === "paper" && computerchoice === "scissors"){
            result.textContent = "Computer gets a point! Computer chose scissors!"
            computerPoint += 1
        }

        userResult.textContent = "User Score: " + userPoint
        computerResult.textContent = "Computer Score: " + computerPoint
    }

    function winnerScissors(){
        if (userChoice === "scissors" && computerchoice === "scissors"){
            result.textContent = "Draw! Computer chose scissors as well!"
        } else if(userChoice === "scissors" && computerchoice === "rock"){
            result.textContent = "Computer gets a point! Computer chose rock!"
            computerPoint += 1
        } else if(userChoice === "scissors" && computerchoice === "paper"){
            result.textContent = "User gets a point! Computer chose paper!"
            userPoint += 1
        }

        userResult.textContent = "User Score: " + userPoint
        computerResult.textContent = "Computer Score: " + computerPoint
    }

    function overallWinnerUser(){
        if (userPoint === 5){
            rockbtn.disabled = true
            paperbtn.disabled = true
            scissorsbtn.disabled = true
            winnerUser.textContent = "User is the winner!"
            loser.textContent = "Computer loses!"
            winnerUser.style.color = "green"
            loser.style.color = "red"
            startNewGameBtn.disabled = false
            startNewGameBtn.addEventListener("click", function(){
                window.location.reload()
            })
        }
    }

    function overlallWinnerComputer(){
        if (computerPoint === 5){
            rockbtn.disabled = true
            paperbtn.disabled = true
            scissorsbtn.disabled = true
            winnerComputer.textContent = "Computer is the winner!"
            loser.textContent = "User loses!"
            winnerComputer.style.color = "green"
            loser.style.color = "red"
            startNewGameBtn.disabled = false
            startNewGameBtn.addEventListener("click", function(){
                window.location.reload()
            })
        }
    }
}

game()