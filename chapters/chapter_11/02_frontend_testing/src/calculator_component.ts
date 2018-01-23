import { Component, MathInterface } from "./interfaces";

const ids = {
  base: "#base",
  exponent: "#exponent",
  result: "#result",
  submit: "#submit"
};

interface CalculatorComponentProps {
  math: MathInterface;
}

export class CalculatorComponent implements Component<CalculatorComponentProps> {

  private _math: MathInterface;
  private $base: HTMLInputElement | null;
  private $exponent: HTMLInputElement | null;
  private $result: HTMLInputElement | null;
  private $btn: Element | null;

  public constructor(props: CalculatorComponentProps) {
    if (props == null) {
      throw new Error("Argument null exception!");
    }
    this._math = props.math;
    this.$base = null;
    this.$exponent = null;
    this.$result = null;
    this.$btn = null;
  }

 public render() {
   return `
   <div class="well">
     <div class="row">
       <div class="col-md-3">
         <div class="form-group">
           <label>Base</label>
           <input
             type="text"
             class="form-control"
             id="${ids.base}"
             placeholder="0"
           />
           </div>
         </div>
       <div class="col-md-3">
         <div class="form-group">
           <label>Exponent</label>
             <input
               type="text"
               class="form-control"
               id="${ids.exponent}"
               placeholder="0"
             />
           </div>
         </div>
       <div class="col-md-3">
         <div class="form-group">
           <label>Result</label>
             <input
               type="text" class="form-control"
               id="${ids.result}"
               placeholder="1"
               disabled="disabled"
             >
           </div>
         </div>
       <div class="col-md-3">
         <div class="form-group">
           <button
             id="${ids.submit}"
             type="submit"
             class="btn btn-primary"
           >
             Submit
           </button>
         </div>
       </div>
     </div>
   </div>
 `;
 }

 public componentDidMount() {
  this.$base = document.querySelector("#base");
  this.$exponent = document.querySelector("#exponent");
  this.$result = document.querySelector("#result");
  this.$btn = document.querySelector("#submit");
  if (this.$btn) {
   this.$btn.addEventListener("click", (e: Event) => {
     this._onSubmit();
   });
  }
 }

 private _onSubmit() {
   if (this.$base && this.$exponent) {
    const base = parseInt(this.$base.value, 10);
    const exponent = parseInt(this.$exponent.value, 10);
    if (isNaN(base)) {
      throw new Error("Base must be a number!");
    } else if (isNaN(exponent)) {
      throw new Error("Exponent must be a number!");
    } else {
      if (this.$result) {
        const result = this._math.pow(base, exponent);
        this.$result.value = result.toString();
      }
    }
   }
 }
}
