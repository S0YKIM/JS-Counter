class Counter {
    constructor (initValue = 0) {
        this.count = initValue;
    }
    increase() {
        this.count += 1;
        return this.count;
    }
    decrease() {
        if (this.count > 0)
            this.count -= 1;
        return this.count;
    }
    reset() {
        this.count = 0;
        return this.count;
    }
}

export default Counter;