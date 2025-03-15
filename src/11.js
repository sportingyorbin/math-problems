// Generate a random math problem using JavaScript
function generateMathProblem() {
  // Get two random numbers between 1 and 10
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  
  // Determine the operator (+, -, x, /)
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  let problem = `${num1} ${operator} ${num2}`;
  
  // Solve the problem and return the result
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
}
