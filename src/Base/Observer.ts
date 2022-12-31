import {Observable} from "./Observable";

export abstract class Observer<SubjectType extends Observable> {
    protected observable: SubjectType;

    constructor(observable: SubjectType) {
        this.observable = observable;
        this.observable.addObserver(this);
    }

    abstract update(): void;
}