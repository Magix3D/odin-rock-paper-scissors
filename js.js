let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let roundWinner = "";

let getHumanChoice = () => humanChoice = prompt("Input the hand sign of your choice :)");

let handSign = () => {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  }
  return "scissors";
};

let playRound = (humanChoice, computerChoice) => {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        roundWinner = 'tie'
    }
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++
        roundWinner = 'player'
    }
    if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
};

let gameWinner = () => (humanScore > computerScore) ? alert("Human won 🙆🏽‍♂️") : alert("Computer won 🤖")

let playGame = () => {
    for(let i = 0; i < 5; i++) {
        playRound(
            getHumanChoice(),
            handSign()
        );
        console.log("Winner round " + (i + 1) + ": " + roundWinner)
    };
    gameWinner()
};

/*RUN*/

playGame();
