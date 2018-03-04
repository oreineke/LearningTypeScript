import { readFile } from "fs";

function promisify<T>(fn: (...args: any[]) => void) {
    return (...args: any[]) => {
        return new Promise<T>((res, rej) => {
            const cb = (err: Error, result: T) =>  err ? rej(err) : res(result);
            const cbIndex = fn.length - 1;
            args[cbIndex] = cb;
            fn(...args);
        });
    };
}

const readFileAsync = promisify<Buffer>(readFile);

(async () => {
    const buffer = await readFileAsync("./hello.txt", "utf-8");
    console.log(buffer.toString());
})();

async function readJson(fileName: string) {
    try {
        const buffer = await readFileAsync(fileName, "utf-8");
        const parsed = JSON.parse(buffer.toString());
        return parsed;
    } catch (err) {
        return err;
    }
}



