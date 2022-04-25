class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  wonTheGame() {
    this.wins += 1
  }
}
