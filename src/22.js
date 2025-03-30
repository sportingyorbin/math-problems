function getRandomNumber(min, max) {
  min = Math.ceil(Math.random() * (max - min + 1));
  return min;
}

// Example usage:
const randomNumber = getRandomNumber(10, 50);
console.log(randomNumber);
