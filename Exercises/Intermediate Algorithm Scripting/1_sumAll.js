function sumAll(arr) {
  var minVal = Math.min(arr[0], arr[1]);
  var maxVal = Math.max(arr[0], arr[1]);
  sum = 0;
  for (var i = minVal; i <= maxVal; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
