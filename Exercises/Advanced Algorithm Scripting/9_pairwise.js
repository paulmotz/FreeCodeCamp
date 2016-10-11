function pairwise(arr, arg) {
  if (arr.length === 0) return 0;
  var indices = [];
  var used = [];
  for (var x = 0; x < arr.length; x++) {
    used[x] = false;
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && !used[i] && !used[j]) {
        indices.push(i, j);
        used[i] = true;
        used[j] = true;
      }
    }
  }
  return indices.reduce(function(a, b) {
    return a + b;
  });
}


// pairwise([1,4,2,3,0,5], 7);
// pairwise([1, 1, 1], 2);
pairwise([], 100);
