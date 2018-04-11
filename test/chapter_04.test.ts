import { shouldNotThrow, shouldThrow } from "./test_utils";
import * as path from "path";

export function testChapter04() {

    shouldNotThrow(
        path.join(__dirname, "..", "chapters", "chapter_04", "01_classes.ts"),
        { strict: true }
    );

    shouldThrow(
        path.join(__dirname, "..", "chapters", "chapter_04", "02_Inheritance.ts"),
        [
            "Property 'teach' does not exist on type 'Person'."
        ],
        { strict: true }
    );

/*
.ts          
04_parameter_properties.ts  
07_optional_properties.ts  
10_generic_classes.ts      
13_iterables.ts         
16_srp.ts           
19_polymorphism.ts  
22_dip.ts
.ts       
05_class_expressions.ts     
08_readonly_properties.ts  
11_generic_constraints.ts  
14_abstract_classes.ts  
17_encapsulation.ts  
20_isp.ts
03_access_modifiers.ts  
06_static_members.ts        
09_method_overriding.ts    
12_mixins.ts               
15_interfaces.ts        
18_ocp.ts            
21_lsp.ts
*/

}

testChapter04();
