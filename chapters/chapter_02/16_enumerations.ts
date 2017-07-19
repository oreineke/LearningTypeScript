// Don't forget to enable strictNullChecks or strict in tsconfig.json
module enumerations_demo {

    enum CardinalDirectionEnum {
        Up,
        Down,
        Left,
        Right
    }

    type CardinalDirectionUnionType =
        "North"
        | "East"
        | "South"
        | "West";

    function move(distance: number, direction: CardinalDirectionUnionType) {
        // ...
    }

    move(1, "North"); // Okay
    move(1, "Nurth"); // Error!

    enum CardinalDirectionStringEnum {
        Red = "North",
        Green = "East",
        Blue = "South",
        West = "West"
    }

}
