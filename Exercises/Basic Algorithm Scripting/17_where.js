function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i ++) {
    if (num <= arr[i]) return i;
  }
  return i;
}

//where([40, 60], 50);
where([2, 5, 10], 15);
