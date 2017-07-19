// Don't forget to enable strictNullChecks or strict in tsconfig.json
module local_type_demo {

    interface Person {
        name: string;
        age: number;
    }

    function makePerson(name: string, age: number): Person {

        // Local type
        class Person implements Person {
            constructor(
                public name: string,
                public age: number
            ) {}
        }

        return new Person(name, age);

    }

    let user = makePerson("Remo", 28);

}
