import Ast, { DiagnosticMessageChain } from "ts-simple-ast";
import chalk from "chalk";

function getAst(tsConfigPath: string, sourceFilesPath: string) {
    const ast = new Ast({
        tsConfigFilePath: tsConfigPath,
        addFilesFromTsConfig: false
    });
    ast.addExistingSourceFiles(sourceFilesPath);
    return ast;
}

function getErrors(ast: Ast) {
    const diagnostics = ast.getDiagnostics();
    const preEmitDiagnostics = ast.getPreEmitDiagnostics();
    
    function dmcToString(dmc: DiagnosticMessageChain, msg: string = ""): string {
        const messageText = dmc.getMessageText();
        const code = dmc.getCode();
        msg += `${code} ${messageText}\n`;
        const next = dmc.getNext();
        return next ? dmcToString(next, msg) : msg;
    }
    
    const errors = diagnostics.map((diagnostic) => {
        const code = diagnostic.getCode();
        const sourceOrUndefined = diagnostic.getSourceFile();
        const source = sourceOrUndefined ? sourceOrUndefined.getFilePath() : "";
        const line = sourceOrUndefined ? sourceOrUndefined.getLineNumberFromPos(diagnostic.getStart() || 0) : "";
        const stringOrDMC = diagnostic.getMessageText();
        const messageText = (typeof stringOrDMC === "string") ? stringOrDMC : dmcToString(stringOrDMC);
        return `
            ERROR CODE: ${code}
            DESCRIPTION: ${messageText}
            FILE: ${source}
            LINE: ${line}
        `;
    });

    return errors;
}

const myAst = getAst("./tsconfig.json", "./app/*.ts");

getErrors(myAst).forEach(err => console.log(chalk.red(err)));
