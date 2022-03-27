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
    let playerMove = playerSelection.toLowerCase();
    let compMove = computerSelection;
    let outcome = '';
    let rationale = '';

    // check if it's a tie

    if (playerMove == compMove) {
        outcome = 'Tie';
        rationale = 'Both players cast the same move.';
    }

    // if not, check to see who won
    // return string like `You ${outcome}! ${rationale}.`
  }