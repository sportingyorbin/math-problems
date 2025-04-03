function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;

  let sqrt = Math.sqrt(num);
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += Math.floor(number % 10);
    number = Math.floor(number / 10);
  }
  return sum;
}

// Example usage
console.log(isPrime(7)); // true
console.log(sumOfDigits(972136584)); // 10 (Sum of digits is 9 + 7 + 2 + 1 + 3 + 6 + 5 + 8 + 4 = 10)
