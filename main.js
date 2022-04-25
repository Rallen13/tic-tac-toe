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
}
