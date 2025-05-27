function sumOfMultiples(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            continue;
        }
        sum += i;
    }
    return sum;
}

console.log(sumOfMultiples(100));
