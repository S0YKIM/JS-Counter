class Counter {
    constructor (initValue = 0) {
        this._count = initValue;
    }
    increase() {
        this._count += 1;
        return this._count;
    }
    decrease() {
        if (this._count > 0)
            this._count -= 1;
        return this._count;
    }
    reset() {
        this._count = 0;
        return this._count;
    }
}

export default Counter;