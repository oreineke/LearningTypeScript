// Don't forget to enable strictNullChecks or strict in tsconfig.json
module typeof_operator_demo {

    // typeof at runtime
    let myNumber1 = 5;
    console.log(typeof myNumber1 === "number");

    // typeof at design time
    let myNumber2 = 5;
    type NumberType = typeof myNumber2;

}
