function calculateSum(a, b) {
  return a + b;
}

function findMaxValue(numbers) {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}
