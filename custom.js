/**
 * Rock Paper Scissors JS Game
 * Created by Anthony Delgado on 8/19/16.
 */


var winCount = 0;
var tieCount = 0;
var lostCount = 0;

function playGame(userGuess) {

    var computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = "rock";
    }
    else if (computerChoice < 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }


    console.log('The computer guessed');
    console.log(computerChoice);

    if (userGuess === computerChoice) {
        // Its a tie!
        swal({
            title: "Its a tie!",
            text: userGuess + ' vs ' + computerChoice,
            imageUrl: "images/tie.gif"
        });
        tieCount++;
    } else if ((userGuess === 'rock') && (computerChoice === 'scissors')) {
        //rock vs scissors
        swal({
            title: "Winner!",
            text: userGuess + ' vs ' + computerChoice,
            imageUrl: "images/win.gif"
        });
        winCount++;
    } else if ((userGuess === 'paper') && (computerChoice === 'rock')) {
        //paper vs rock
        swal({
            title: "Winner!",
            text: userGuess + ' vs ' + computerChoice,
            imageUrl: "images/win.gif"
        });
        winCount++;

    } else if ((userGuess === 'scissors') && (computerChoice === 'paper')) {
        //scissor vs paper
        swal({
            title: "Winner!",
            text: userGuess + ' vs ' + computerChoice,
            imageUrl: "images/win.gif"
        });
        winCount++;

    } else {
        //catch all else - Sorry, you lost.
        swal({
            title: "Loser!",
            text: userGuess + ' vs ' + computerChoice,
            imageUrl: "images/loser.gif"
        });
        lostCount++;
    }


    // Taking the tallies and displaying them in HTML
    var html = "<li>Win: " + winCount + " Loose: " + lostCount + "  Tie: " + tieCount + " </li>";

    // Placing the html into the game ID
    document.querySelector('#score-board').innerHTML = html;


}


document.onkeyup = function () {

    // Determines which exact key was selected. Make it lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    switch (userGuess) {
        case 'r':
            playGame("rock");
            break;
        case 'p':
            playGame("paper");
            break;
        case 's':
            playGame("scissors");
            break;
    }
}
