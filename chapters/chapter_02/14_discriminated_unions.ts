// Don't forget to enable strictNullChecks or strict in tsconfig.json
module discriminated_unions_demo {

    interface Square {
        kind: "square";
        size: number;
    }

    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface Circle {
        kind: "circle";
        radius: number;
    }

    type Shape = Square | Rectangle | Circle;

    function area(shape: Shape) {
        const PI = Math.PI;
        switch (shape.kind) {
            case "square": return shape.size * shape.size;
            case "rectangle": return shape.width * shape.height;
            case "circle": return PI * shape.radius * shape.radius;
        }
    }

}