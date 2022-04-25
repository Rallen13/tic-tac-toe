// querry selectors go here
var gameBoard = document.querySelector(".game-board");
var playableSpots = document.querySelectorAll(".square");

// global variables go here
var newGame = new Game();

// event listeners go here
gameBoard.addEventListener("click", checkClickLocation);

// event handlers and functions go here
function checkClickLocation(event) {
    makeMoves(event);
}

function makeMoves(event) {
  newGame.gameBoardLogic(event.target.id);
  updateBoard();
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
