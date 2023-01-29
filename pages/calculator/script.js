const numBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const allClearBtn = document.querySelector("[data-all-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const deletBtn = document.querySelector("[data-delete]");
const preTxtEl = document.querySelector("[data-pre-value]");
const currTxtEl = document.querySelector("[data-curr-value]");

class Calculator {
  constructor(preValEl, currValEl) {
    this.preValEl = preValEl;
    this.currValEl = currValEl;
    this.currVal = "";
    this.preVal = "";
    this.operator = undefined
    this.expressions = ['+','-','/','*']
  }
  clear() {
    this.currVal = "";
    this.preVal = "";
    this.update()
  }
  append(num) {
    if (num === "." && this.currVal.includes(".")) return;
    this.currVal = String(this.currVal) + String(num);
    // if(this.expressions.includes(this.currVal[this.currVal.length - 1])) return
    try{
        this.preVal = eval(this.currVal)
    }catch(e){
        this.preVal = ''
    }
    this.update()
  }
  update() {
    this.currValEl.innerText = this.currVal;
    this.preValEl.innerText = this.preVal
  }
  operation(operator){
      const len = this.currVal.length
      if(this.expressions.includes(this.currVal[len - 1])) return
      this.append(operator)
  }
  equals(){
      this.currVal = this.preVal
      this.preVal = ''
      this.update()
  }
  delete(){
      this.currVal = this.currVal.slice(0,-1)
      try {
        this.preVal = eval(this.currVal)
      } catch (error) {
          this.preVal = ''
      }
      this.update()
  }
}

const calculator = new Calculator(preTxtEl, currTxtEl);

allClearBtn.addEventListener("click", () => {
  calculator.clear();
});

numBtn.forEach((num) => {
  num.addEventListener("click", () => {
    calculator.append(num.innerText);
  });
});

operationBtn.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        calculator.operation(operator.innerText)
        calculator.update()
    })
})

equalsBtn.addEventListener('click', ()=>{
    calculator.equals()
})

deletBtn.addEventListener('click', ()=>{
    calculator.delete()
})