// Inner text
// Get the element by its ID
var element = document.getElementById("demo");

// Retrieve the text content
var textContent = element.innerText;
console.log(textContent); // Output: "This is some text."

// Set new text content
element.innerText = "Updated text content.";
 

// Inner HTML
// Get the element by its ID
var element = document.getElementById("container");

// Retrieve the HTML content
var htmlContent = element.innerHTML;
console.log(htmlContent); // Output: "<p>This is a <strong>paragraph</strong>.</p>"

// Set new HTML content
element.innerHTML = "<p>Updated <em>HTML</em> content.</p>";


// Calculator
var num1 = Number(document.getElementById("one").innerText);
var num2 = Number(document.getElementById("two").innerText);
var opr = document.getElementById("operation").innerText;

const res = (a, b, opr) => {
    switch (opr) {
        case "Addition":
            return a + b;
        case "Subtraction":
            return a - b;
        case "Multiplication":
            return a * b;
        case "Division":
            return a / b;
        default:
            return "Invalid operation";
    }
};

var result = res(num1, num2, opr);
document.getElementById("result").innerHTML = `<strong> Result was ${result} </strong>`;
    