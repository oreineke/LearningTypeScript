namespace method_decorator_demo {

    function logMethod(
        target: any,
        key: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {

        // save a reference to the original method
        const originalMethod = descriptor.value;

        function logFunctionCall(method: string, args: string, result: string) {
            console.log(`Call: ${method}(${args}) => ${result}`);
        }

        // editing the descriptor/value parameter
        descriptor.value = function(this: any, ...args: any[]) {

            // convert method arguments to string
            const argsStr = args.map((a: any) => {
                return JSON.stringify(a);
            }).join();

            // invoke method and get its return value
            const result = originalMethod.apply(this, args);

            // convert result to string
            const resultStr = JSON.stringify(result);

            // display in console the function call details
            console.log();
            console.log(`Call: ${key}(${argsStr}) => ${resultStr}`);

            // return the result of invoking the method
            return result;
        };

        // return edited descriptor
        return descriptor;
    }

    class Person {

        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        @logMethod
        public saySomething(something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }

    }

    const person = new Person("Michael", "Jackson");
    person.saySomething("Annie, are you ok?");
    // Call: saySomething("Annie, are you ok?") => "Michael Jackson says: Annie, are you ok?"

}
