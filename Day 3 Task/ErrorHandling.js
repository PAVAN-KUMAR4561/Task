// Write a function called divideNumbers that takes two numbers as parameters and throws an error if the second number is zero. Use a try/catch block to call the function and handle the error gracefully by logging a message to the console.

function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    const result = divideNumbers(10, 0); 
    console.log("Result: "+ result);
  } catch (error) {
    console.error("Error: "+ error.message);
  }
  