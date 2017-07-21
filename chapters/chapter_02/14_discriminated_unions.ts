namespace discriminated_unions_demo {

    interface ISquare {
        kind: "square";
        size: number;
    }

    interface IRectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface ICircle {
        kind: "circle";
        radius: number;
    }

    type IShape = ISquare | IRectangle | ICircle;

    function area(shape: IShape) {
        const PI = Math.PI;
        switch (shape.kind) {
            case "square": return shape.size * shape.size;
            case "rectangle": return shape.width * shape.height;
            case "circle": return PI * shape.radius * shape.radius;
        }
    }

}
