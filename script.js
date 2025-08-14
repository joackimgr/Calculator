function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, op) {
    if (op === "+") {
        return sum(num1, num2);
    } else if (op === "-") {
        return substract(num1, num2);
    } else if (op === "×") {
        return multiply(num1, num2);
    } else if (op === "÷") {
        return divide(num1, num2);
    }
}

function setOp(op) {
    firstNum = parseInt(document.querySelector('p').textContent);
    currentOp = op.textContent;
    let p = document.querySelector('p');
    p.innerHTML = '';
}

function addToDisplay(id) {
    let p = document.querySelector('p');
    let btn = document.getElementById(id);
    let b = btn.textContent;
    p.appendChild(document.createTextNode(b));
}

let num = document.querySelectorAll(".num");
num.forEach(item => {
    item.addEventListener("click", () => {addToDisplay(item.id)});
});
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    let p = document.querySelector('p');
    p.innerHTML = '';
})
let firstNum;
let currentOp;
let op = document.querySelectorAll(".operator");
op.forEach(item => {
    item.addEventListener("click", () => {setOp(item)})
})
let equals = document.getElementById('equals');
equals.addEventListener("click", function() {
    let secondNum = parseInt(document.querySelector('p').textContent);
    let result = operate(firstNum, secondNum, currentOp);
    document.querySelector('p').textContent = result;
})
let del = document.getElementById('delete');
del.addEventListener("click", () => {
    let p = document.querySelector('p');
    p.textContent = p.textContent.slice(0, -1);
});
