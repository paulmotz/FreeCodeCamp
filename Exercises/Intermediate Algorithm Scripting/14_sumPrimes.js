function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

sumPrimes(10);
//isPrime(9);
//isPrime(13);
