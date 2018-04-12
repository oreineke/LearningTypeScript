namespace CustomException {

    export declare class Error {
        public name: string;
        public message: string;
        public stack: string;
        constructor(message?: string);
    }

    export class Exception extends Error {

        constructor(public message: string) {
            super(message);
            this.name = "Exception";
            this.message = message;
            this.stack = new Error().stack;
        }
        public toString() {
            return `${this.name} ${this.message}`;
        }
    }

}
