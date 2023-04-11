/* Deklrasi Variabel */

let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';
let tampilan = '0';

let calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const persen = document.querySelectorAll(".percentage");
const clearall = document.querySelector(".all-clear");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");
/* fungsi screen */
window.onload = () => {
    updateScreen(currentNumber);
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
}
/*fungsi angka*/
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
        if (tampilan === '0') {
            tampilan = number;
        } else {
            tampilan += number;
        }
    } else {
        currentNumber += number;
        tampilan += number;
    }

};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(tampilan);
    })
})


/*fungsi operator*/
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen(tampilan);
    })
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
        tampilan += operator;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

/* fungsi equal-sign*/
equal.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

/*calcualte */

const calculate = () => {
    let hasil = '';
    switch (calculationOperator) {
        case "+":
            hasil = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            hasil = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            hasil = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            hasil = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = hasil;
    calculationOperator = '';
    prevNumber = '';
}
/* fungsi decimal*/
inputDesimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
    tampilan += 'dot';
}

decimal.addEventListener("click", (event) => {
    inputDesimal(event.target.value);
    updateScreen(tampilan);
})

/* fungsi AC*/
const allclear = () => {
    prevNumber = '';
    currentNumber = '0';
    calculationOperator = '';
    tampilan = '';
}

clearall.addEventListener('click', () => {
    allclear();
    calculatorScreen.value = currentNumber;
})

/*fungsi persen*/
persen.forEach((percentage) => {
    percentage.addEventListener("click", (event) => {
        let hasil = '';
        hasil = parseFloat(currentNumber) / 100;
        currentNumber = hasil;
        tampilan = `${prevNumber} ${calculationOperator} ${hasil}`;
        updateScreen(tampilan);
    })
})