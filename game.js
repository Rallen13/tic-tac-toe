class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🧑🏼‍🚀");
    this.player2 = new Player(2, "🤖");
    this.complete = false;
    this.turn = this.player1.token;
  }

  gameBoardLogic(clickLocation) {
    if (this.board.includes(clickLocation) && (!this.complete)) {
      var boardIndex = this.board.indexOf(clickLocation);
      this.board[boardIndex] = this.turn;
      this.nextTurn();
    }
  }

  nextTurn() {
    if (this.turn === this.player2.token) {
      this.turn = this.player1.token;
    } else {
      this.turn = this.player2.token;
    }
  }
}
