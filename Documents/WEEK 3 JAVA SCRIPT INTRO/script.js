// Declare variables of different data types
let name = "John"; // string
let age = 25; // number
let isStudent = true; // boolean

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division by zero is not allowed.");
        return null;
    }
}

function multiply(a, b) {
    return a * b;
}

// Event listeners for buttons
document.getElementById("addButton").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = add(num1, num2);
    document.getElementById("resultValue").textContent = result;
    updateChart(result);
});

document.getElementById("subtractButton").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = subtract(num1, num2);
    document.getElementById("resultValue").textContent = result;
    updateChart(result);
});

document.getElementById("divideButton").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = divide(num1, num2);
    document.getElementById("resultValue").textContent = result;
    updateChart(result);
});

document.getElementById("multiplyButton").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = multiply(num1, num2);
    document.getElementById("resultValue").textContent = result;
    updateChart(result);
});

document.getElementById("toggleHighlightButton").addEventListener("click", function() {
    document.getElementById("result").classList.toggle("highlight");
});

document.getElementById("hideResultButton").addEventListener("click", function() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("hideResultButton").classList.add("hidden");
    document.getElementById("showResultButton").classList.remove("hidden");
});

document.getElementById("showResultButton").addEventListener("click", function() {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("hideResultButton").classList.remove("hidden");
    document.getElementById("showResultButton").classList.add("hidden");
});

// Initialize Chart.js
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Result'],
        datasets: [{
            label: 'Operation Result',
            data: [0],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update chart with new result
function updateChart(result) {
    myChart.data.datasets[0].data[0] = result;
    myChart.update();
}

// Debugging using console.log()
console.log("Name:", name); // Output: John
console.log("Age:", age); // Output: 25
console.log("Is student:", isStudent); // Output: true
