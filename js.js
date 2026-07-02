// --- State ---
let humanScore = 0;
let computerScore = 0;
const result = document.getElementById("result");

// --- Pure utility functions ---
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (human, computer) => {
  if (human === computer) return "tie";

  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock");

  return humanWins ? "player" : "computer";
};

// --- Game logic ---
const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(humanChoice, computerChoice);

  if (winner === "player") humanScore++;
  if (winner === "computer") computerScore++;

  // Check immediately after updating score
  if (humanScore === 3 || computerScore === 3) {
    const winnerText =
      humanScore > computerScore ? "Human won 🙆🏽‍♂️" : "Computer won 🤖";

    result.textContent = winnerText;

    // reset scores for next game
    humanScore = 0;
    computerScore = 0;
    return; // stop here, do NOT print score again
  }

  updateScore();
};

const updateScore = () => {
  result.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
};

// --- Event binding ---
["rock", "paper", "scissors"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => playRound(id));
});
