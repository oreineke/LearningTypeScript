// Don't forget to enable strictNullChecks or strict in tsconfig.json
module control_flow_analysis_demo {

    function increment(
        incrementBy: number, value: number | number[]
    ) {
        if (Array.isArray(value)) {
            // value must be an array of number
            return value.map(value => value + incrementBy);
        } else {
            // value is a number
            return value + incrementBy;
        }
    }

    increment(2, 2); // 4
    increment(2, [2, 4, 6]); // [4, 6, 8]

}
