import {Observable} from "../Base/Observable";
import {Direction} from "../Base/types";

export class Snake extends Observable {
    constructor(
        private _state = {
            coords: [[5, 5]],
            alive: true,
        }
    ) {
        super();
    }

    get state() {
        return this._state;
    }

    move(direction: Direction) {
        this.changeCoords(direction);
        this.notifyObservers();
    }

    private changeCoords(direction: Direction) {
        // меняем координаты и состояние змейки в
        // зависимости от того, куда она двигается дальше
    }
}