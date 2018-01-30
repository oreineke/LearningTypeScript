import * as ts from "typescript";
import Ast, { DiagnosticMessageChain, ClassDeclaration, MethodDeclaration, PropertyDeclaration, InterfaceDeclaration } from "ts-simple-ast";
import { join, flatten } from "lodash";
import * as fs from "fs";
import * as path from "path";
import * as request from "request";

/*
    This file demostrates how to use ts-simple-ast
    to navigate the TypeScript AST export classes
    and interfaces to an UML diagram
*/

interface MethodDetails {
    name: string;
}

interface PropertyDetails {
    name: string;
}

const templates = {
    url: (yuml: string) => `http://yuml.me/diagram/scruffy/class/${yuml}`,
    composition: "+->",
    implementsOrExtends: (abstraction: string, implementation: string) => {
        return `${templates.plainClassOrInterface(abstraction)}^-${templates.plainClassOrInterface(implementation)}`;
    },
    plainClassOrInterface: (name: string) => `[${name}]`,
    colorClass: (name: string) => `[${name}{bg:skyblue}]`,
    colorInterface: (name: string) => `[${name}{bg:palegreen}]`,
    class: (name: string, props: PropertyDetails[], methods: MethodDetails[]) => {
        const pTemplate = (property: PropertyDetails) => `${property.name};`;
        const mTemplate = (method: MethodDetails) => `${method.name}();`;
        return `${templates.colorClass(name)}[${name}|${props.map(pTemplate)}|${methods.map(mTemplate)}]`
    },
    interface: (name: string, props: PropertyDetails[], methods: MethodDetails[]) => {
        const pTemplate = (property: PropertyDetails) => `${property.name};`;
        const mTemplate = (method: MethodDetails) => `${method.name}();`;
        return `${templates.colorInterface(name)}[${name}|${props.map(pTemplate)}|${methods.map(mTemplate)}]`
    }
};

function getAst(tsConfigPath: string, sourceFilesPaths?: string[]) {
    const ast = new Ast({
        tsConfigFilePath: tsConfigPath,
        addFilesFromTsConfig: !Array.isArray(sourceFilesPaths)
    });
    if (sourceFilesPaths) {
        ast.addExistingSourceFiles(sourceFilesPaths);
    }
    return ast;
}

// Emmits yUML code for an class declaration
function emmitClass(classDeclaration: ClassDeclaration) {

    const name = classDeclaration.getName();
    const members = classDeclaration.getAllMembers();

    const properties = members.filter(m => m instanceof PropertyDeclaration).map(m => {
        return {
            name: m.getChildren().filter(c => c.getKind() === ts.SyntaxKind.Identifier)[0].getFullText().trim()
        };
    });

    const methods = members.filter(m => m instanceof MethodDeclaration).map(m => {
        return {
            name: m.getChildren().filter(c => c.getKind() === ts.SyntaxKind.Identifier)[0].getFullText().trim()
        };
    });

    return templates.class(name, properties, methods);
}

// Emmits yUML code for an interface declaration
function emmitInterface(interfaceDeclaration: InterfaceDeclaration) {

    const name = interfaceDeclaration.getName();
    const members = interfaceDeclaration.getAllMembers();

    const properties = members.filter(m => m.getKind() === ts.SyntaxKind.PropertySignature).map(m => {
        return {
            name: m.getChildren().filter(c => c.getKind() === ts.SyntaxKind.Identifier)[0].getFullText().trim()
        };
    });

    const methods = members.filter(m => m.getKind() === ts.SyntaxKind.MethodSignature).map(m => {
        return {
            name: m.getChildren().filter(c => c.getKind() === ts.SyntaxKind.Identifier)[0].getFullText().trim()
        };
    });

    return templates.interface(name, properties, methods);

}

// Emmits yUML code for an heritage clauses
function emmitInheritanceRelationships(classDeclaration: ClassDeclaration) {

    const name = classDeclaration.getName();
    const heritageClauses = classDeclaration.getHeritageClauses();

    const implementsClauses = heritageClauses.map(m => {
        return flatten(m.getChildren().map(ff => ff.getChildren().map(c => c.getFullText().trim())));
    });

    return flatten(implementsClauses).map(c => templates.implementsOrExtends(c, name));

}

// Renders the UML diagram in a png
function render(yuml: string) {

    const download = (uri: string, filename: string, callback: () => void) => {
        request.head(uri, (err, res, body) => {
            request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
        });
    };

    const url = templates.url(yuml);
    const file = `uml_diagram_${new Date().getTime()}.png`;
    const absolutePath = path.join(__dirname, file);

    download(url, file, () => console.log(`Saved UML diagram available at ${absolutePath}`));
}

// Generates the yUML for the given TypeScript files
function yUML(tsConfigPath: string, sourceFilesPaths: string[]) {

    const ast = getAst(tsConfigPath, sourceFilesPaths);
    const files = ast.getSourceFiles();

    const declarations = files.map(f => {
        return {
            fileName: f.getFilePath(),
            classes: f.getClasses(),
            interfaces: f.getInterfaces()
        };
    });

    const entities = declarations.map(d => {
        const classes = d.classes.map(emmitClass);
        const interfaces = d.interfaces.map(emmitInterface);
        const inheritanceRelationships = d.classes.map(emmitInheritanceRelationships);
        return [...classes, ...interfaces, ...inheritanceRelationships];
    });

    const yuml = join(flatten(entities), ",");

    return yuml;
}

const yuml = yUML(
    "./tsconfig.json",
    [
        "./app/interfaces.ts",
        "./app/ninja.ts",
        "./app/katana.ts",
        "./app/main.ts"
    ]
);

render(yuml);
