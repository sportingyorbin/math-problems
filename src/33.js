function calculateArea(radius) {
  const pi = Math.PI;
  
  if (!radius) {
    throw new Error('Radius cannot be null or undefined');
  }
  
  return pi * radius ** 2;
}

console.log(calculateArea(5));
