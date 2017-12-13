namespace method_decorator_demo {

    function readMetadata(target: any, key: string, descriptor: any) {

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

    function addMetadata(target: any, key: string, index: number) {
        var metadataKey = `_log_${key}_parameters`;
        if (Array.isArray(target[metadataKey])) {
            target[metadataKey].push(index);
        } else {
            target[metadataKey] = [index];
        }
    }

    class Person {

        public name: string;
        public surname: string;

        public constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        @readMetadata
        public saySomething(@addMetadata something: string): string {
            return `${this.name} ${this.surname} says: ${something}`;
        }

    }

    const person = new Person("Michael", "Jackson");
    person.saySomething("Annie, are you ok?");
    // saySomething arg[0]: "Annie, are you ok?"

}
