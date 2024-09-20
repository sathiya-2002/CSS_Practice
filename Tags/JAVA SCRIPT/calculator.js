function calculator(num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {  // Check for division by zero
            result = num1 / num2;
        } else {
            console.log("Error: Division by zero is not allowed.");
            return;
        }
    } else {
        console.log("Error: Invalid operator. Use +, -, *, or /.");
        return;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}
