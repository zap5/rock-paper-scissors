function computerPlay() {
    let decision = Math.floor(Math.random() * 3);
    let move = '';

    switch(decision) {
        case 0:
            move = 'rock';
            break;
        case 1: 
            move = 'paper';
            break;
        case 2: 
            move = 'scissors';
            break;
    }

    return move;
}

function playRound(playerSelection, computerSelection) {
    const playerMove = playerSelection.toLowerCase();
    const compMove = computerSelection;
    let outcome = '';
    let rationale = '';

    const scenario1 = 'Paper beats rock.'
    const scenario2 = 'Rock beats scissors.'
    const scenario3 = 'Scissors beats paper.'

    // check if it's a tie

    if (playerMove === compMove) {
        outcome = 'Tie';
        rationale = 'Both players cast the same move.';
    }

    // if not, check to see who won

    if (playerMove === 'rock') {
        if (compMove === 'paper') {
            outcome = 'Lose';
            rationale = scenario1;
        }
        else if (compMove === 'scissors') {
            outcome = 'Win';
            rationale = scenario2;
        }
    }
    else if (playerMove === 'paper') {
        if (compMove === 'scissors') {
            outcome = 'Lose';
            rationale = scenario3;
        }
        else if (compMove === 'rock') {
            outcome = 'Win';
            rationale = scenario1;
        }
    }
    else {
        if (compMove === 'rock') {
            outcome = 'Lose';
            rationale = scenario2;
        }
        else if (compMove === 'paper') {
            outcome = 'Win'; 
            rationale = scenario3
        }
    }
    console.log(`You cast ${playerMove}.`);
    console.log(`The computer cast ${compMove}.`);
    console.log(`You ${outcome}! ${rationale}`);

    return outcome;
  }

function game() {
    let humanScore = 0;
    let compScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let humanMove = window.prompt("Choose rock, paper, or scissors.");
        let round = playRound(humanMove, computerPlay());

        if (round === 'Win') {
            humanScore++;
        }
        else if (round === 'Lose') {
            compScore++;
        }

        console.log(`The score is ${humanScore} to ${compScore}.`);
    }

    console.log(`Final score is ${humanScore} to ${compScore}.`);

    if (humanScore > compScore) {
        console.log(`You win the game!`);
    }
    else if (humanScore < compScore) {
        console.log(`You lose the game.`);
    }
    else {
        console.log(`The game is a draw.`);
    }
  }

  game();