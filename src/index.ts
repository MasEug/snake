import {Snake} from "./Snake";
import {SnakeViewObserver} from "./Snake/SnakeViewObserver";
import {Direction} from "./Base/types";
import {Game} from "./Game";

const game = new Game(new Snake(), SnakeViewObserver.bindTemplateClass('snake-item-template'));

document.addEventListener('keydown', ({ key }) => {
    switch(key) {
        case 'ArrowDown': game.act(Direction.Down);break;
        case 'ArrowUp': game.act(Direction.Up);break;
        case 'ArrowLeft': game.act(Direction.Left);break;
        default: game.act(Direction.Right);break;
    }
});
