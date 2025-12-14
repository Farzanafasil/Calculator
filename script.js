const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator === '-') {
        resultInput.value = '-';
        return;
    }

    if (resultInput.value !== '' && !isOperator(resultInput.value.slice(-1))) {
        resultInput.value += operator;
    }
}

function clearDisplay() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        if (/[/\+\-\*]{2,}/.test(expression)) {
            throw new Error("Invalid expression");
        }
        const result = eval(expression);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}