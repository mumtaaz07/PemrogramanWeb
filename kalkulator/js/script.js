let displayValue = '0'; // Nilai yang ditampilkan pada layar kalkulator.
let firstOperand = null; // menyimpan pertamangka
let waitingForSecondOperand = false; // mengecek apakah kalkulator sedang menunggu input angka kedua setelah operator.
let operator = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() { //Mengembalikan kondisi awal, yaitu mengatur displayValue menjadi '0', menghapus nilai firstOperand, mengubah waitingForSecondOperand ke false, dan menghapus operator yang tersimpan.
    displayValue = '0'; 
    firstOperand = null; 
    waitingForSecondOperand = false; 
    operator = null;
    updateDisplay();
}

function inputDigit(digit) { //Fungsi ini dipanggil ketika pengguna memasukkan angka.
    if (waitingForSecondOperand === true) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
}
//Menyimpan operator matematika yang dipilih
function inputOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculateResult(firstOperand, inputValue, operator); //Fungsi yang melakukan perhitungan berdasarkan operand dan operator yang diberikan
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function calculateResult(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    } else if (operator === '%') {
        return firstOperand % secondOperand;
    } else if (operator === '**') {
        return Math.pow(firstOperand, secondOperand);
    }
    return secondOperand;
}

function calculate() {
    if (operator && waitingForSecondOperand) {
        return;
    }

    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculateResult(firstOperand, inputValue, operator);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}
