function calculate(num1, num2, operation) {

    // Validate inputs
    if (num1 === null || num2 === null || num1 === undefined || num2 === undefined) {
      return 'Invalid numbers provided.';
    }
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Both inputs must be numbers.';
    }
  
    const validOperations = ['add', 'subtract', 'multiply', 'divide'];
    if (!validOperations.includes(operation)) {
      return 'Invalid operation provided. Use "add", "subtract", "multiply", or "divide".';
    }
  
    // various operations(add, subtract, multiply, divide)
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          return 'Division by zero is not allowed.';
        }
        result = num1 / num2;
        break;
      default:
        result = 'Unknown operation.';
    }
  
    return result;
  }
  console.log(calculate(5, 3, 'add'));        
console.log(calculate(10, 2, 'divide'));    
