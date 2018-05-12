import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
    game.render();
    //recursion
    requestAnimationFrame(gameLoop);
})();

// use this for testing
// function gameLoop() {
//     game.render();
//     //recursion
//     setInterval(gameLoop, 20);

// }