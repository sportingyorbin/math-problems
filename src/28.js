function addNumbers(a, b) {
  return a + b;
}

function calculateSum(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15
