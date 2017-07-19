// Don't forget to enable strictNullChecks or strict in tsconfig.json
module polymorphic_this_type_demo {

    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
        // ... other operations go here ...
    }

    let value1 = new BasicCalculator(2)
                .multiply(5)
                .add(1)
                .currentValue();

    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
        // ... other operations go here ...
    }

    let value2 = new ScientificCalculator(2)
            .multiply(5)
            .sin()
            .add(1)
            .currentValue();

}
