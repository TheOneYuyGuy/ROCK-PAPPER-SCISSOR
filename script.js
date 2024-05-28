let player1Selection = null;
let player2Selection = null;
let player1Score = 0;
let player2Score = 0;

function makeSelection(player, selection) {
    if (player === 1) {
        player1Selection = selection;
    } else if (player === 2) {
        player2Selection = selection;
    }

    if (player1Selection && player2Selection) {
        determineWinner();
    }
}

function determineWinner() {
    const result = document.getElementById('result');

    if (player1Selection === player2Selection) {
        result.innerText = 'It\'s a Tie!';
    } else if (
        (player1Selection === 'rock' && player2Selection === 'scissors') ||
        (player1Selection === 'scissors' && player2Selection === 'paper') ||
        (player1Selection === 'paper' && player2Selection === 'rock')
    ) {
        result.innerText = 'Player 1 Wins!';
        player1Score++;
    } else {
        result.innerText = 'Player 2 Wins!';
        player2Score++;
    }

    updateScores();
    // Reset selections for the next round
    player1Selection = null;
    player2Selection = null;
}

function updateScores() {
    document.getElementById('score1').innerText = `Player 1 Score: ${player1Score}`;
    document.getElementById('score2').innerText = `Player 2 Score: ${player2Score}`;
}
