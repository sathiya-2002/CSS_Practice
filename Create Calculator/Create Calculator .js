// Function to append numbers to the display
function appendNumber(number) {
    let display = document.getElementById("display");
    display.value += number;
}

// Function to append an operator (+, -, *, /) to the display
function appendOperator(operator) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);
    
    // Prevent appending multiple operators in a row
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

// Function to calculate and display the result
function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear the entire display
function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
}

// Function to delete the last character in the display
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
