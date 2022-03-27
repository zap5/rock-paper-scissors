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

    return `You ${outcome}! ${rationale}.`
  }