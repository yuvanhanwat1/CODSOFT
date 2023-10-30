let currentInput = '';
let result = 0;

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function appendValue(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function deleteLastInput() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        // Replace the '%' character with the modulo operator '%'
        currentInput = currentInput.replace(/%/g, '%');
        result = eval(currentInput);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
