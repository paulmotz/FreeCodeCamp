function drop(arr, func) {
  // iterative solution
  /*
  var n = 0;
  while (!func(arr[n])) {
    n++;
  }
  return arr.slice(n);
  */
  // one-liner
  return arr.slice(arr.findIndex(func) === -1 ? arr.length : arr.findIndex(func)å);
}

//drop([1, 2, 3], function(n) {return n < 3; });
//drop([1, 2, 3, 4], function(n) {return n >= 3; });
drop([1, 2, 3, 4], function(n) {return n > 5; });
//drop([0, 1, 0, 1], function(n) {return n == 1; });
