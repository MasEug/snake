import {Observer} from "./Observer";

export class Observable {
    protected observers: Observer<typeof this>[] = [];

    addObserver(observer: Observer<typeof this>) {
        this.observers.push(observer);

        return () => {
            this.observers = this.observers.filter(
                (iteratedObserver) => observer !== iteratedObserver
            );
        };
    }

    protected notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
}