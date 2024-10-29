/** @format */

const display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '0';
        } else {
            currentInput = currentInput === '0' ? value : currentInput + value;
        }
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = currentInput;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}
