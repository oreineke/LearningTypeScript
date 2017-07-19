// Don't forget to enable strictNullChecks or strict in tsconfig.json
module index_signature_demo {

    let foo1: any = {};
    foo1.hello = 'World';
    console.log(foo1.hello); // World

    let foo2: any = {};
    foo2['hello'] = 'World';
    console.log(foo2['hello']); // World

    interface StringArray {
        [index: number]: string;
    }

    let myArray: StringArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];

}
