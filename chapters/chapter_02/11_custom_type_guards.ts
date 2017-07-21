namespace custom_type_guard_demo_1 {

    interface Bird {
        fly(): void;
        layEggs(): void;
    }

    interface Fish {
        swim(): void;
        layEggs(): void;
    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }

    function movePet(pet: Fish | Bird) { 
        if (isFish(pet)) {
            pet.swim(); // OK
        } else {
            pet.fly(); // OK
        }
    }

}

module custom_type_guard_demo_2 {

    class Bird {
        fly() {
            // do something...
        }
        layEggs() {
            // do something...
        }
    }

    class Fish {
        swim() {
            // do something...
        }
        layEggs() {
            // do something...
        }
    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return pet instanceof Fish;
    }

    function movePet(pet: Fish | Bird) { 
        if (isFish(pet)) {
            pet.swim(); // OK
        } else {
            pet.fly(); // OK
        }
    }

}


module custom_type_guard_demo_2 {

    function doSomething(x: number | string) {
        if (typeof x === "string") {
            console.log(x.subtr(1)); // Error
            console.log(x.substr(1)); // OK
        }
        x.substr(1); // Error
    }

}
