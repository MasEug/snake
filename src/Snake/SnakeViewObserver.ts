import {Observer} from "../Base/Observer";
import {Snake} from "./Snake";

export class SnakeViewObserver extends Observer<Snake> {
    constructor(private viewTemplateClass: string, observableSnake: Snake) {
        super(observableSnake);
    }

    static bindTemplateClass(viewTemplateClass: string) {
        return this.bind(window, viewTemplateClass);
    }

    update() {
        this.renderSnake(this.observable.state);
    }

    private renderSnake(snakeState: any) {
        console.log(this.observable.state, this.viewTemplateClass)
        //...
    }
}