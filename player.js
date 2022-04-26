class Player {
  constructor(id, token, marker, icon) {
    this.id = id;
    this.token = token;
    this.marker = marker;
    this.icon = icon
    this.wins = [];
  }

  wonTheGame() {
    this.retrieveWinsFromStorage();
    this.wins.push(newGame.board);
    this.saveWinsToStorage();
  }

  saveWinsToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(this.id)) || [];
  }

}
