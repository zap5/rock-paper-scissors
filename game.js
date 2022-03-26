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
    // do a thing
  }