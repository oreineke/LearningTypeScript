import { shouldNotThrow, shouldThrow } from "./test_utils";
import * as path from "path";

export function testChapter05() {

    console.log(("\nCHAPTER 05:"));

    shouldNotThrow(
        path.join(__dirname, "..", "chapters", "chapter_05", "01_namespaces.ts"),
        { strict: true }
    );

}

testChapter05();
