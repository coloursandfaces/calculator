const add = function(...numbers) {
    let total = 0;
    for (let i=0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };


const subtract = function(...numbers) {
    let total = numbers[0] * 2;
    for (let i=0; i < numbers.length; i++) {
      total = total - numbers[i];
    }
    return total;
  };

const multiply = function(...nums) {
    let total = 1;
    for (let i=0; i < nums.length; i++) {
      total *= nums[i];
    }
    return total;
  };

const divide = function(a, b) {
    return a/b;
  }

let oper = null
const operate = function(oper, num1, num2) {
    return oper(num1, num2);
  }



const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const screen = document.querySelector('.screen');
let displayValue = 0


let num1 = 0;
let num2 = 0;
let holdOperate = null;
buttons.forEach((button) => {
    

    button.addEventListener('click', function() {
        const screenDiv = document.createElement('div');
        screenDiv.textContent = button.textContent;
        screen.appendChild(screenDiv);
        displayValue = parseInt(screen.textContent);

        if (button.textContent === "+") {
            num1 = displayValue;
            displayValue = 0;
            screen.textContent = 0
            holdOperate = add;
        }

        if (button.textContent === "-") {
            num1 = displayValue;
            displayValue = 0;
            screen.textContent = 0
            holdOperate = subtract;
        }

        if (button.textContent === "x") {
            num1 = displayValue;
            displayValue = 0;
            screen.textContent = 0
            holdOperate = multiply;
        }

        if (button.textContent === "%") {
            num1 = displayValue;
            displayValue = 0;
            screen.textContent = 0
            holdOperate = divide;
        }

        if (button.textContent === "c") {
            num1 = 0
            num2 = 0
            displayValue = 0;
            screen.textContent = 0
        }

        if (button.textContent === "=" && holdOperate != null) {
            num2 = displayValue;
            displayValue = operate(holdOperate, num1, num2);
            screen.textContent = displayValue;
        }
    })
})

const calculate = function(...number) {
    let num1 = 0
    let num2 = 0

}


