namespace decorator_factory_demo {

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

    function logMethod(
        target: any,
        key: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {

            const metadataKey = `_log_${key}_parameters`;
            const indices = target[metadataKey];

            if (Array.isArray(indices)) {

                for (let i = 0; i < args.length; i++) {

                    if (indices.indexOf(i) !== -1) {
                        const arg = args[i];
                        const argStr = JSON.stringify(arg);
                        console.log(`${key} arg[${i}]: ${argStr}`);
                    }
                }

                return originalMethod.apply(this, args);

            }

        };

        return descriptor;

    }

    function logParameter(target: any, key: string, index: number) {
        var metadataKey = `_log_${key}_parameters`;
        if (Array.isArray(target[metadataKey])) {
            target[metadataKey].push(index);
        } else {
            target[metadataKey] = [index];
        }
    }

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

    function log(this: any, ...args: any[]) {
        const nonNullableArgs = args.filter(a => a !== undefined);
        switch (nonNullableArgs.length) {
            case 1:
                return logClass.apply(this, args);
            case 2:
                // break instead of return as property
                // decorators don't have a return
                logProperty.apply(this, args);
                break;
            case 3:
                if (typeof args[2] === "number") {
                    logParameter.apply(this, args);
                }
                return logMethod.apply(this, args);
            default:
                throw new Error("Decorators are not valid here!");
        }
    }

    @log
    class Person {

        @log
        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        @log
        public saySomething(@log something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }
    }

    const person = new Person("Michael", "Jackson");
    person.saySomething("Annie, are you ok?");
    // New: Person
    // Set: name => Michael
    // saySomething arg[0]: "Annie, are you ok?"
    // Get: name => Michael

}
