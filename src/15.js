function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const arr = [];
for (let i = 0; i < 10; i++) {
  const num = getRandomInt(100);
  arr.push(num);
}
console.log(arr);
