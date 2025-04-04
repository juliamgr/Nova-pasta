let display = document.getElementById('display');


function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}


function clearDisplay() {
    display.innerText = '0';
}


function backspace() {
    if (display.innerText.length === 1) {
        clearDisplay();
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}


function calculate() {
    try {
        let result = eval(display.innerText.replace('×', '*'));
        display.innerText = result % 1 === 0 ? result : result.toFixed(2);
    } catch (error) {
        display.innerText = 'Erro';
        setTimeout(clearDisplay, 1000);
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});