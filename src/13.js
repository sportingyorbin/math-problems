// Math Problems

function getRandomMathProblem() {
  const numbers = [5, 2, 7];
  const operators = ["+", "-", "*"];
  let problem = "";

  for (let i = 0; i < numbers.length - 1; i++) {
    problem += `${numbers[i]} ${operators[Math.floor(Math.random() * operators.length)]} `;
  }

  return problem + numbers[numbers.length - 1];
}

console.log(getRandomMathProblem());
