import {dispatch} from "./actions.js";
import {Game} from "./game.js";
import {scene_stage} from "./scenes/sce_stage.js";

let game = new Game();
scene_stage(game);
game.Start();

// @ts-ignore
window.$ = (...args) => dispatch(game, ...args);

// @ts-ignore
window.game = game;
