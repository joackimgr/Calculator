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
        sum(num1, num2);
    } else if (op === "-") {
        substract(num1, num2);
    } else if (op === "*") {
        multiply(num1, num2);
    } else if (op === "/") {
        divide(num1, num2);
    }
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