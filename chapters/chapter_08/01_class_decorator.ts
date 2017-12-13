namespace class_decorator_demo {

    function logClass<TFunction extends Function>(target: TFunction) {

        // save a reference to the original constructor
        const originalConstructor = target;

        function logClassName(func: TFunction) {
            console.log("New: " + func.name);
        }

        // a utility function to generate instances of a class
        function instanciate(constructor: TFunction, ...args: any[]) {
            var c: any = function(this: any) {
                return constructor.apply(this, ...args);
            };
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behaviour
        var newConstructor = function(...args: any[]) {
            logClassName(originalConstructor);
            return instanciate(originalConstructor, args);
        };

        // copy prototype so instanceof operator still works
        newConstructor.prototype = originalConstructor.prototype;

        // return new constructor (will override original)
        return newConstructor as any;
    }

    @logClass
    class Person {

        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        public saySomething(something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }

    }

    const person = new Person("Michael", "Jackson");
    // New: Person

}
