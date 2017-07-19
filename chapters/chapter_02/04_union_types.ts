// Don't forget to disable strictNullChecks or strict in tsconfig.json
module union_types_demo {

    let path: string[]|string;
    path = '/temp/log.xml';
    path = ['/temp/log.xml', '/temp/errors.xml'];
    path = 1; // Error

    interface Bird {
        fly(): void;
        layEggs(): void;
    }

    interface Fish {
        swim(): void;
        layEggs(): void;
    }

    declare let pet: Fish | Bird;
    pet.layEggs(); // OK
    pet.swim(); // Errors
    pet.fly();  // Error

}
