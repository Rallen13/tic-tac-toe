class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🧑🏼‍🚀", "X", "assets/viper-icon.png");
    this.player2 = new Player(2, "🤖", "O", "assets/cylon-icon.png");
    this.complete = false;
    this.turn = this.player1;
    this.plays = 0;
    this.winner;
    this.winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
  }

  gameBoardLogic(clickLocation) {
    if (this.board.includes(clickLocation) && (!this.complete)) {
      var boardIndex = this.board.indexOf(clickLocation);
      // var token = this.turn.token
      this.board[boardIndex] = this.turn.marker;
      this.checkGameOver();
      this.nextTurn();
    }
  }

  checkGameOver() {
    if (!this.checkWin()) {
      this.checkDraw();
    }
  }

  nextTurn() {
    if (this.turn === this.player2) {
      this.turn = this.player1;
    } else {
      this.turn = this.player2;
    }
  }

  checkWin() {
    for (var i = 0; i < this.winningBoards.length; i++) {
      this.checkWinningBoards(i);
    }
    return this.complete
  }

  checkWinningBoards(i) {
    if (this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][1]] &&
       this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][2]]) {
         this.winner = this.turn;
         this.setWins();
         this.completeGame();
    }
  }

  setWins() {
    if (this.winner === this.player1) {
      this.player1.wonTheGame()
    } else if (this.winner === this.player2) {
      this.player2.wonTheGame()
    }
  }

  checkDraw() {
    this.plays += 1;
    if (this.plays === 9) {
      this.winner = "It's a tie!";
      this.completeGame();
    }
  }

  completeGame() {
    this.complete = true;
  }

}
