class Game {
  constructor() {
  this.player1 = new Player(1, "🤖");
  this.player2 = new Player(2, "🧑🏼‍🚀");
  this.complete = false;
  this.turn = this.player1.token;
  }
}
