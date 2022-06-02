function add(a, b) {
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
        return console.log('Cannot divide by 0.');
    }
    return a / b;
}

function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log('Sorry, that operation is not supported.');
    }
}

function calculate() {
    let calc = presses.join('').split(/([+, \-, *, /])/);
    let result = operate(parseFloat(calc[0]), calc[1], parseFloat(calc[2]));
    displayText.textContent = Math.round(result * 1000) / 1000;
    presses.length = 0;
    presses[0] = result;
}

const displayText = document.querySelector('#displaytext');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];
let presses = [];

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        displayText.textContent += event.target.innerText;
        if (event.target.id === 'clr') {
            presses.length = 0;
            displayText.textContent = '';
        }
        if ((event.target.id === 'add' || event.target.id === 'sub' || event.target.id === 'mul' || event.target.id === 'div') && operators.some(value => presses.includes(value))) {
            calculate();
            displayText.textContent += event.target.innerText;
        }
        if (event.target.id === 'equ') {
            calculate();
        }
        if (event.target.id !== 'equ' && event.target.id !== 'clr') {
            presses.push(event.target.innerText);
        }   
    });
});