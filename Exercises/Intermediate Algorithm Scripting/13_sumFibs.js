function sumFibs(num) {
  return getOddFibs(num).reduce(function(a, b) {
    return a + b;
  });
}

function getOddFibs(num) {
  var fib0 = 1;
  var fib1 = 1;
  var fibs = [1];
  while (fib1 <= num) {
    var fibTemp = fib1;
    fib1 += fib0;
    fib0 = fibTemp;
    if (fib0 % 2 == 1) {
      fibs.push(fib0);
    }
  }
  return fibs;
}

sumFibs(75025);
//sumFibs(4);
//getOddFibs(40);

/* from wiki (https://github.com/FreeCodeCamp/wiki/blob/master/Bonfire-Sum-All-Odd-Fibonacci-Numbers.md): 

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) { 
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

*/