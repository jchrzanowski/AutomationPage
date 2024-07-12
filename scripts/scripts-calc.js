
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '', '', '←', 'C'
];

const buttonsContainer = document.getElementById('buttons');

buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = button;
    if (button === '') {
        buttonElement.disabled = true;
    } else {
        buttonElement.onclick = () => handleButtonClick(button);
    }
    buttonsContainer.appendChild(buttonElement);
});

function handleButtonClick(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (currentValue === '' && (value === '*' || value === '/' || value === '.' || value === '=' || value === '←')) {
        alert('Nieprawidłowy pierwszy znak');
        return;
    }

    switch (value) {
        case 'C':
            clearDisplay();
            break;
        case '←':
            deleteLast();
            break;
        case '=':
            calculateResult();
            break;
        default:
            appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Błąd w wyrażeniu');
    }
}