// querry selectors go here
var gameBoard = document.querySelector(".game-board");
var playableSpots = document.querySelectorAll(".square");
var turnDecider = document.querySelector(".turn");

// global variables go here
var newGame = new Game();

// event listeners go here
gameBoard.addEventListener("click", checkClickLocation);

// event handlers and functions go here
function checkClickLocation(event) {
  if (!newGame.complete) {
    makeMoves(event);
  }
  checkGameIsCompleted();
}

function makeMoves(event) {
  newGame.gameBoardLogic(event.target.id);
  updateBoard();
  updateTurnDecider();
}

function checkGameIsCompleted() {
  if (newGame.complete) {
    updateWinner();
    loadWins();
  }
}

function updateBoard() {
  for (var i = 0; i < playableSpots.length; i++) {
    if (newGame.board[i].length === 2 || newGame.board[i].length === 7) {
      playableSpots[i].innerHTML = newGame.board[i];
    } else {
      playableSpots[i].innerHTML = '';
    }
  }
}

function updateTurnDecider() {
  turnDecider.innerHTML = `${newGame.turn.token}s Turn`
}

function updateWinner() {
  turnDecider.innerHTML = `${newGame.winner.token} WINS`
}

function loadWins() {
  var player1Wins = document.querySelector(".player-1-wins");
  var player2Wins = document.querySelector(".player-2-wins");
  player1Wins.innerHTML = `${newGame.player1.wins} Wins`;
  player2Wins.innerHTML = `${newGame.player2.wins} Wins`;
}
