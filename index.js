let input = '';
const resultElement = document.getElementById('result');

function appendInput(value) {
    input += value;
    resultElement.value = input;
}

function clearInput() {
    input = '';
    resultElement.value = input;
}

function calculate() {
    const result = eval(input);
    resultElement.value = result;
    input = result;
}
