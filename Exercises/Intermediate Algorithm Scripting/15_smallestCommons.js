// noprotect
function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var maxPos = 1;
  for (var x = min; x <= max; x++) maxPos *= x;
  //var a = [];
  for (var i = max; i <= maxPos; i ++) {
    var flag = true;
    for (var j = min; j <= max; j++) {
      if (evenlyDivisible(i, j)) flag = false; //return [i, j]; //flag = false;evenlyDivisible(i, j);
    }
    if (flag) return i;
  }
  // return a;
  // return arr;
}

function evenlyDivisible(divisor, dividend) {
  return divisor % dividend;
}

//evenlyDivisible(5,1);
//evenlyDivisible(32,2);
//smallestCommons([1,5]);
smallestCommons([1,13]);

// 3:00 start 5:00 end. 2 hours total, 24 min per problem