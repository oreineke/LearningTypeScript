import { shouldNotThrow, shouldThrow } from "./test_utils";
import * as path from "path";

export function testChapter07() {

    console.log(("\nCHAPTER 07:"));

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "01_pure_functions.ts")
        ],
        { strict: true }
    );
}

testChapter07();
