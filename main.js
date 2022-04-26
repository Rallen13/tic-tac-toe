// querry selectors go here
var gameBoard = document.querySelector(".game-board");
var playableSpots = document.querySelectorAll(".square");
var turnDecider = document.querySelector(".turn");

// global variables go here
var player1 = new Player(1, "Starbuck", "X", "assets/viper-icon.png");
var player2 = new Player(2, "Cylon", "O", "assets/cylon-icon.png");
var newGame = new Game(player1, player2);

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
    updateEndOfGame();
    loadWins();
    window.setTimeout(resetGame, 2000);
  }
}

function updateBoard() {
  for (var i = 0; i < playableSpots.length; i++) {
    if (newGame.board[i].length === 1) {
      setCustomIcon(i)
    } else {
      playableSpots[i].innerHTML = '';
    }
  }
}

function setCustomIcon(i) {
  if ( newGame.board[i] === newGame.player1.marker) {
    playableSpots[i].innerHTML =    `<img src=${newGame.player1.icon} />`
  }

  if ( newGame.board[i] === newGame.player2.marker) {
    playableSpots[i].innerHTML = `<img src=${newGame.player2.icon} />`
  }
}

function updateTurnDecider() {
  turnDecider.innerHTML = `${newGame.turn.token}'s Turn`
}

function updateEndOfGame() {
  if (newGame.tie) {
    turnDecider.innerHTML = `${newGame.tie}`
  }

  if (newGame.winner) {
    turnDecider.innerHTML = `${newGame.winner.token} WINS`
  }
}

function loadWins() {
  var player1Wins = document.querySelector(".player-1-wins");
  var player2Wins = document.querySelector(".player-2-wins");
  player1Wins.innerHTML = `${newGame.player1.wins} Wins`;
  player2Wins.innerHTML = `${newGame.player2.wins} Wins`;
}

function resetGame() {
  newGame = new Game(player1, player2);
  updateBoard();
  updateTurnDecider();
}
