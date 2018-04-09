import { shouldNotThrow, shouldThrow } from "./test_utils";
import * as path from "path";

export function testChapter02() {

    console.log(("\nCHAPTER 02:"));
    
    shouldNotThrow(
        path.join(__dirname, "..", "chapters", "chapter_02", "01_type_inference.ts"),
        { strict: false }
    );

    shouldThrow(
        path.join(__dirname, "..", "chapters", "chapter_02", "02_type_annotations.ts"),
        ["Argument of type '\"2\"' is not assignable to parameter of type 'number'."],
        { strict: false }
    );

    shouldThrow(
        path.join(__dirname, "..", "chapters", "chapter_02", "03_structural_type_system.ts"),
        [
            "Argument of type '{ name: string; famiyName: string; }' is not assignable to parameter of type 'Person'." +
            "Property 'surname' is missing in type '{ name: string; famiyName: string; }'."
        ],
        { strict: false }
    );

    shouldThrow(
        path.join(__dirname, "..", "chapters", "chapter_02", "04_union_types.ts"),
        [
            "Type '1' is not assignable to type 'string | string[]'.",
            "Property 'orderItems' does not exist on type 'Supplier | Customer'.Property 'orderItems' does not exist on type 'Customer'."
        ],
        { strict: false }
    );

}
