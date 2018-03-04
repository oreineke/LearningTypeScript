import * as fs from "fs";
import * as yargs from "yargs";
import glob from "glob";

function promisify<T>(fn: (...args: any[]) => void) {
    return (...args: any[]) => {
        return new Promise<T>((res, rej) => {
            const cb = (err: Error, result: T) => err ? rej(err) : res(result);
            const cbIndex = fn.length - 1;
            args[cbIndex] = cb;
            fn(...args);
        });
    };
}

const globAsync = promisify(glob);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Read arguments from process.argv
function getCommandLineArguments() {
    return {
        pattern: yargs.argv.files,
        find: yargs.argv.find,
        replace: yargs.argv.replace
    };
};

// Checks that no arguments are missing
function validateCommandLineArguments(args: any) {
    if (args.pattern === undefined) {
        throw new Error(`Invalid pattern ${args.pattern}`);
    }
    if (args.find === undefined) {
        throw new Error(`Invalid find ${args.find}`);
    }
    if (args.replace === undefined) {
        throw new Error(`Invalid replace ${args.replace}`);
    }
}

// Find path of files that match glob pattern
async function findMatchingFilesAsync(pattern: string) {
    const files = await globAsync(pattern);
    // We need to let TypeScript that files is an array
    return files as string[];
}

// Finds a word in a file and replaces with another word
async function findAndReplaceAsync(
    file: string, find: string, replace: string
) {
    const buffer = await readFileAsync(file);
    const originalText = buffer.toString();
    // This is a quick way to replace a word in JavaScript
    const newText = originalText.split(find).join(replace);
    await writeFileAsync(file, newText, "utf8");
}

// Runs the entire process
async function runAsync() {

    // Read arguments
    const args = getCommandLineArguments();

    // Validate arguments
    validateCommandLineArguments(args);

    // Find matching files
    const files = await findMatchingFilesAsync(args.pattern);

    // Find and replace
    files.forEach(async (file) => {
        await findAndReplaceAsync(file, args.find, args.replace);
    });

}

// The application entry point
(async () => {
    await runAsync();
})();

// Run using ts-node 03_file_system.ts --files ./**/*.txt --find SOMETHING --replace SOMETHING_ELSE
