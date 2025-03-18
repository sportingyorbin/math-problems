function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let problemNumber = getRandomInt(1, 20);
let answer = 0;

switch (problemNumber) {
case 1:
  // Problem 1: Multiplication of two numbers
  let num1 = getRandomInt(1, 10);
  let num2 = getRandomInt(1, 10);
  answer = num1 * num2;
  break;
case 2:
  // Problem 2: Addition of three numbers
  let num3 = getRandomInt(1, 10);
  let num4 = getRandomInt(1, 10);
  let num5 = getRandomInt(1, 10);
  answer = num3 + num4 + num5;
  break;
default:
  // Problem X: Multiplication of two numbers
  let num6 = getRandomInt(1, 10);
  let num7 = getRandomInt(1, 10);
  answer = num6 * num7;
}

console.log(`Problem ${problemNumber}: What is the result of ${num1}, ${num2}, ${num3}, ${num4}, ${num5}, and ${num6} multiplied together?`);
console.log(`Answer: ${answer}`);
