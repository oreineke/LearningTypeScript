module type_inference_variables_demo {

    let TestVar1;           // variable is declared but not initialized
    alert(TestVar1);        // shows undefined 
    alert(typeof TestVar1); // shows undefined

    let TestVar2 = null;    // variable is declared and value null is assigned as value
    alert(TestVar2);        // shows null 
    alert(typeof TestVar2); // shows object

    let TestVar3: null;      // Error, Type expected
    let TestVar4: undefined; // Error, cannot find name undefined

}
