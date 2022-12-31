import {Direction} from "../Base/types";
import {Observer} from "../Base/Observer";
import {Snake} from "../Snake";

type SnakeObserverConstructor = new (snake: Snake) => Observer<Snake>;

export class Game {
    constructor(
        private snake: Snake,
        ...snakeObservers: SnakeObserverConstructor[]
    ) {
        snakeObservers.forEach((SnakeObserverCtor) => new SnakeObserverCtor(snake));
    }

    act(direction: Direction) {
        this.snake.move(direction);
        return this;
    }
}