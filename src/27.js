function calculateAverage(numbers) {
  return numbers.length > 0 ? sum(numbers) / numbers.length : null;
}

function sum(numbers) {
  return numbers.reduce((sum, value) => sum + value, 0);
}
