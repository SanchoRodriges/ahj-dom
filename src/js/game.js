export default class Game {
  constructor(cell) {
    this._cell = cell;
    this.gameWrapper = document.querySelector(".game-wrapper");
  }

  init() {
    let e = 1;

    for (let i = 0; i < this._cell; i++) {
      let row = document.createElement("div");
      row.classList.add("game-row");
      this.gameWrapper.append(row);

      for (let o = 0; o < this._cell; o++) {
        let cell = document.createElement("div");
        cell.classList.add("game-cell");
        cell.dataset.id = e;
        row.append(cell);
        e++;
      }
    }
  }

  goblinCreate() {
    const goblin = document.createElement("div");
    goblin.classList.add("goblin");
    this.randomCell();
    const cell = this.gameWrapper.querySelector(`[data-id="${this.randId}"]`);
    this.goblin = goblin;
    cell.append(goblin);
  }

  goblinMove() {
    this.goblin.remove();
    this.goblinCreate();
  }

  randomCell() {
    const min = 1;
    const max = this._cell * this._cell;
    const randId = Math.floor(Math.random() * (max - min + 1) + min);
    if (this.randId !== randId) {
      this.randId = randId;
    } else {
      console.log("asdf");
      this.randomCell();
    }
  }
}
