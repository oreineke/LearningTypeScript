import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import { spy, stub } from "sinon";
import { Calculator } from "../src/frontend/calculator_component";
import { MathClient } from "../src/frontend/math_client";

// Here we will write some unit test for the claculator
// component.

describe("Calculator Component", () => {

  // Showcases how to spy on functions to assert that a function has been invoked
  it("Should mount correctly", () => {
    const client = new MathClient();
    const componentDidMountSpy = spy(Calculator.prototype, "componentDidMount");
    const wrapper = mount(<Calculator client={client} />);
    expect(componentDidMountSpy.calledOnce).to.equal(true);
  });

  // Showcases how to use stub to isolate a component being
  // tested (CalculatorWidget) from its dependencies (MathDemo)
  // also showcases how to test async code
  it("Should invoke client and set #result value when #submit.click is triggered", (done) => {

    const mathClient = new MathClient();

    stub(mathClient, "pow", (base: number, exponent: number) => {
      expect(base).to.equal(2);
      expect(exponent).to.equal(3);
      done();
    });

    const wrapper = mount(<Calculator client={mathClient} />);
    wrapper.find("#base").simulate("change", { target: { value: "2" } });
    wrapper.find("#exponent").simulate("change", { target: { value: "2" } });
    wrapper.find("#submit_btn").simulate("click");

  });

});
