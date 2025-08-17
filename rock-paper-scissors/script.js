
const total_rounds = 5;
playGame();

function playGame() {
    let score = [0, 0]  // [User, Computer]
    let round = 1;

    while (round <= total_rounds) {
        let userChoice = getUserChoice(round);
        let botChoice = getBotChoice();
        if (playRound(userChoice, botChoice, score) == true) round++;
    }
    showResult(score);
}

function playRound(userChoice, botChoice, score) {
    if (userChoice == botChoice) {
        alert(`It is a tie!`);
        console.log('It is a tie!');
        return false;
    }

    let msg;
    if ( // computer wins
        (userChoice == 'Rock' && botChoice == 'Paper') ||
        (userChoice == 'Paper' && botChoice == 'Scissors') ||
        (userChoice == 'Scissors' && botChoice == 'Rock')) {
        msg = `You lose! ${botChoice} beats ${userChoice}`;
        score[1]++;
    }
    else { // user wins
        msg = `You win! ${userChoice} beats ${botChoice}`;
        score[0]++;
    }

    msg = `
            You picked ${userChoice}
            Computer picked ${botChoice}

            ${msg}
            User Score: ${score[0]}
            Computer Score: ${score[1]}
        `;

    alert(msg);
    console.log(msg);

    return true;
}

function getUserChoice(round) {
    let choice = parseInput(prompt(`Round ${round} \nPick Rock, Paper or Scissors!`));

    while (choice != "Rock" && choice != 'Paper' && choice != 'Scissors' && choice != 'Q') {
        choice = parseInput(prompt("Invalid choice! Pick Rock, Paper or Scissors!"))
    }

    return choice;
}

function getBotChoice() {
    let randInt = Math.floor(Math.random() * 100);
    
    if (randInt < 33) return "Rock";
    if (randInt < 66) return "Paper";
    return "Scissors";
}

function showResult(score) {
    let msg;
    if (score[0] > score[1]) {msg = 'You win!'}
    else if (score[0] > score[1]) {msg = 'You have lost!'}

        msg = `
        Game Over! ${msg}
        Your Score:     ${score[0]}
        Computer score: ${score[1]}
    `;

    alert(msg);
    console.log(msg);
}

function parseInput(str) {
    // Changes first char to upper case, rest lower case
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
