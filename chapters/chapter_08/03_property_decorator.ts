namespace method_decorator_demo {

    function logProperty(this: any, target: any, key: string) {

        // property value
        var _val = this[key];

        function logPropertyAccess(acces: "Set" | "Get", k: string, v: any) {
            console.log(`${acces}: ${k} => ${v}`);
        }

        // property getter
        var getter = function() {
            logPropertyAccess("Get", key, _val);
            return _val;
        };

        // property setter
        var setter = function(newVal: any) {
            logPropertyAccess("Set", key, newVal);
            _val = newVal;
        };

        // Delete property. The delete operator throws
        // in strict mode if the property is an own
        // non-configurable property and returns
        // false in non-strict mode.
        if (delete this[key]) {
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }

    class Person {

        @logProperty
        public name: string;

        @logProperty
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
    // Set: name => Michael
    // Set: surname => Jackson

    person.saySomething("Annie, are you ok?");
    // Get: name => Michael
    // Get: surname => Jackson

}
