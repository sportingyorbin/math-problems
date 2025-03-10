const generateMathProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const numbers = [10, 20, 30, 40, 50];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return problem;
};
