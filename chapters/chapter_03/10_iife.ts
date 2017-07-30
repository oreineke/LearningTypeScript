namespace iife_demo_1 {

    let bar = 0; // global

    (function() {
        let foo: number = 0; // In scope of this function
        bar = 1; // Access global scope
        console.log(bar); // 1
        console.log(foo); // 0
    })();

    console.log(bar); // 1
    console.log(foo); // Error

}

namespace iife_demo_2 {

    class Counter {
        private _i: number;
        public constructor() {
            this._i = 0;
        }
        public get(): number {
            return this._i;
        }
        public set(val: number): void {
            this._i = val;
        }
        public increment(): void {
            this._i++;
        }
    }

    let counter = new Counter();
    console.log(counter.get()); // 0
    counter.set(2);
    console.log(counter.get()); // 2
    counter.increment();
    console.log(counter.get()); // 3
    console.log(counter._i); // Error: Property '_i' is private

}
