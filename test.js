// Define the calculator object
const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  };
  
  // Get user input
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  
  // Perform the calculation
  let result;
  switch (operator) {
    case "+":
      result = calculator.add(num1, num2);
      break;
    case "-":
      result = calculator.subtract(num1, num2);
      break;
    case "*":
      result = calculator.multiply(num1, num2);
      break;
    case "/":
      result = calculator.divide(num1, num2);
      break;
    default:
      throw new Error("Invalid operator");
  }
  
  // Display the result
  alert(`Result: ${result}`);