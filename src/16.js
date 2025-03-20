function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let numbers = [];

for (let i = 0; i < 10; i++) {
  let randomNumber = getRandomInt(50);
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
console.log(numbers);
