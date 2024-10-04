document.getElementById("currencyConverter").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const output = document.getElementById("output");

    // Simple fixed conversion rates for demonstration purposes
    const conversionRates = {
        USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74.30 },
        EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87.50 },
        GBP: { USD: 1.33, EUR: 1.14, GBP: 1, INR: 99.00 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1 }
    };

    if (fromCurrency === toCurrency) {
        output.innerText = `${amount} ${toCurrency}`;
    } else {
        const convertedAmount = (amount * conversionRates[fromCurrency][toCurrency]).toFixed(2);
        output.innerText = `${convertedAmount} ${toCurrency}`;
    }
});
