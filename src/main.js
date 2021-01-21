/*
"Let me not die without fame, without a fight,
But let me do some great deed to be heard by those to come."
 - Homer, The Iliad

if found, please return to sleepycrow
*/

import Game from "./core/game";
import GameState from "./states/gameState";

export default function startGame(canvasId, socket, username){
    var game = new Game(canvasId, 1);
    game.net.setSocket(socket);
    game.stateManager.switchState(new GameState(username));
    return game;
}