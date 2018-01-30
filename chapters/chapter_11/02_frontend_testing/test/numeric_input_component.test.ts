/*
import { CalculatorWidget } from "../src/frontend/calculator_component";

describe('BDD test example for CalculatorWidget class \n', () => {

  before(function() {
    $("body").append('<div id="widget"/>');
  });

  beforeEach(function() {
    $("#widget").empty();
  });

  // showcases how to spy on functions to assert that a function has been invoked
  it('should invoke onSubmit when #submit.click is triggered \n', () => {
    var math : MathInterface = new MathDemo();
    var calculator = new CalculatorWidget(math);

    calculator.render("#widget");
    // spy on onSubmit
    var onSubmitSpy = sinon.spy(calculator, "onSubmit");

    // initialize inputs and trigger click on #submit
    $('#base').val("2");
    $('#exponent').val("3");
    $("#submit").trigger("click");

    // assert calculator.onSubmit was invoked
    expect(onSubmitSpy.called).to.equal(true);
    expect(onSubmitSpy.callCount).to.equal(1);
    expect($("#result").val()).to.equal('8');
  });

  // showcases how to use stub to isolate a component being
  // tested (CalculatorWidget) from its dependencies (MathDemo)
  // also showcases how to test async code
  it('onSubmit should set #result value when #submit.click is triggered \n', (done) => {
    var math : MathInterface = new MathDemo();

    // replace pow method with stub
    sinon.stub(math, "pow", function(a, b) {
      // assert that CalculatorWidget.onSubmit is invoking
      // math.pow with the rigth arguments
      expect(a).to.equal(2);
      expect(b).to.equal(3);

      done();
    });

    // initialize inputs and trigger click on #submit
    var calculator = new CalculatorWidget(math);

    calculator.render("#widget");
    $('#base').val("2");
    $('#exponent').val("3");

    $("#submit").trigger("click");
  });

});
*/
