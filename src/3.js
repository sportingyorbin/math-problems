// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Use the random number to solve a math problem
let solution = '';
if (randomNumber % 2 === 0) {
  // If the number is even, solve for the square root
  solution = `The square root of ${randomNumber} is ${Math.sqrt(randomNumber)}`;
} else {
  // If the number is odd, solve for the cube root
  solution = `The cube root of ${randomNumber} is ${Math.cbrt(randomNumber)}`;
}

console.log(solution);
