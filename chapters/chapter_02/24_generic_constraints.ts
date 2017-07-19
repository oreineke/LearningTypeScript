// Don't forget to enable strictNullChecks or strict in tsconfig.json

interface Comparable { 
    equals<T>(value: T): boolean;
}

function isEqual<T extends Comparable, TVal>(comparable: T, value: TVal) { 
    return comparable.equals(value);
}

interface Rectangle {
    width: number;
    height: number;
}

type ComparableRectangle = Rectangle & Comparable;

const rectangle: Rectangle & Comparable = {
    width: 5,
    height: 8,
    equals: (v: Rectangle) => {
        return v.width === this.width && v.height === this.height;
    }
};

interface Circle {
    radious: number;
}

type ComparableCircle = Circle & Comparable;

const circle: Circle & Comparable = {
    radious: 5,
    equals: (v: Circle) => {
        return v.radious === this.radious;
    }
};

isEqual<ComparableRectangle, Rectangle>(rectangle, { width: 5, height: 8 });
isEqual<ComparableCircle, Circle>(circle, { radious: 5 });
