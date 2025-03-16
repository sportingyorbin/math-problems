function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(10, 20);
console.log(randomNumber);
