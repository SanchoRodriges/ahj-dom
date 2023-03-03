import "./css/style.css";

import "./js/app";
import Game from "./js/game";

// TODO: write your code in app.js
const game = new Game(4);
game.init();
game.goblinCreate();
setInterval(() => {
  game.goblinMove();
}, 1000);
