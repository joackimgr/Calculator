let display = document.querySelector('.display p');
let firstNum;
let secondNum;
let currentOp;
let waitingForNumber = false;

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error!";
    }
    return a / b;
}

function operate(num1, num2, op) {
    if (op === "+") {
        return sum(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "×") {
        return multiply(num1, num2);
    } else if (op === "÷") {
        return divide(num1, num2);
    }
}

function setOp(op) {
    if (firstNum !== null && !waitingForNumber) {
        secondNum = parseFloat(display.textContent);
        let result = operate(firstNum, secondNum, currentOp);
        updateDisplay(result);
        firstNum = result;
    } else {
        firstNum = parseFloat(display.textContent);
    }
    currentOp = op;
    waitingForNumber = true;
}

function calculate() {
    if (firstNum !== null && currentOp !== null && !waitingForNumber) {
        secondNum = parseFloat(display.textContent);
        let result = operate(firstNum, secondNum, currentOp);
        updateDisplay(result);
        firstNum = null;
        secondNum = null;
        currentOp = null;
        waitingForNumber = true;
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

function addToDisplay(value) {
    if (display.textContent === "0" || waitingForNumber) {
        display.textContent = value;
        waitingForNumber = false;
    } else {
        display.textContent += value;
    }
}

let num = document.querySelectorAll(".num");
num.forEach(item => {
    item.addEventListener("click", () => {addToDisplay(item.textContent)});
});
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    updateDisplay("0");
    firstNum = null;
    secondNum = null;
    currentOp = null;
    waitingForNumber = false;
})

let op = document.querySelectorAll(".operator");
op.forEach(item => {
    item.addEventListener("click", () => {setOp(item.textContent)})
})
let equals = document.getElementById('equals');
equals.addEventListener("click", function() {
    calculate();
})
let del = document.getElementById('delete');
del.addEventListener("click", () => {
    let p = document.querySelector('p');
    p.textContent = p.textContent.slice(0, -1);
});
