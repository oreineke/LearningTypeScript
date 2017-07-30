namespace arrow_functions {

    class Person {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
        public greet() {
            alert(`Hi! My name is ${this._name}`);
        }
        public greetDelay(time: number) {
            setTimeout(() => {
                alert(`Hi! My name is ${this._name}`); // Error
            }, time);
        }
    }

    let person = new Person("Remo");
    person.greet(); // "Hi! My name is Remo"
    person.greetDelay(1000); // "Hi! My name is Remo"

}
