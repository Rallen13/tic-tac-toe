class Player {
  constructor(id, token, marker, icon) {
    this.id = id;
    this.token = token;
    this.marker = marker;
    this.icon = icon
    this.wins = 0;
  }

  wonTheGame() {
    this.wins += 1
  }
}
