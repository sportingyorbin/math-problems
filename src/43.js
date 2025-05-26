function sumUpTo(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

console.log(sumUpTo(5)); // Output: 15
