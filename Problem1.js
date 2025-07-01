// Calculator

function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  } else {
    return "Invalid operation";
  }
}

// Example
let result = calculator(10, 5, "add");
console.log("Result:", result);
