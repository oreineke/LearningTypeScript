import { expect } from "chai";
import { MathDemo } from "../src/backend/math_demo";

// Here we will write some unit test for the math demo
// component. We have implemented the same method (pow)
// multiplate times to demostrate how we can work with
// asynchronous and long running tasks.

// describe() is used to declare a test suite
describe("MathDemo class", () => {

  // before() is invoked once before ALL tests
  before(() => {
    console.log("before() invoked!"); // tslint:disable-line
  });

  // after() invoked once after ALL tests
  after(() => {
    console.log("after() invoked!"); // tslint:disable-line
  });

  // beforeEach() is invoked once before EACH test
  beforeEach(() => {
    console.log("beforeEach() invoked!"); // tslint:disable-line
  });

  // afterEach() is invoked once before EACH test
  afterEach(() => {
    console.log("afterEach() invoked!"); // tslint:disable-line
  });

  // it() is a single test containing one or more assertions
  it("should return the correct numeric value for PI", () => {
    const math = new MathDemo();
    expect(math.PI).to.equals(3.14159265359);
    expect(math.PI).to.be.a("number");
  });

  it("should return the correct numeric value for pow", () => {
    const math = new MathDemo();
    const result = math.pow(2, 3);
    const expected = 8;
    expect(result).to.be.a("number");
    expect(result).to.equal(expected);
  });

  // to test async code we need to invoke done() when the execution is completed
  it("should return the correct numeric value for pow (async)", (done) => {
    const math = new MathDemo();
    math.powAsync(2, 3, function(result) {
      const expected = 8;
      expect(result).to.be.a("number");
      expect(result).to.equal(expected);
      done(); // invoke done() inside your call back or fulfilled promises
    });
  });

  /*
  // When testing async code mocha will let us know if a function takes too long
  // to finish its execution. There are 3 levels of warning
  // 1. >   40ms low warning
  // 2. >  100ms warning
  // 3. > 2000ms fatal error (execution of test will not continue)

  // this function takes over 2000ms to complete and
  // will thereofore stop the test execution

  it("too slow will cause build to fail\n", (done) => {
    const math : MathInterface = new MathDemo();
    math.powAsyncTooSlow(2, 3, function(result){
      const expected = 8;
      expect(result).to.be.a("number");
      expect(result).to.equal(expected);
      done(); // invoke done() inside your call back or fulfilled promises
    });
  });

  // how to test for errors
  it("should throw an exception when no parameters passed \n", () => {
    const math : MathInterface = new MathDemo();
    expect(math.bad).to.throw(Error);
  });

});
