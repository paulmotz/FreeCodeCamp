function steamroller(arr) {
  // I'm a steamroller, baby
  
  var inner = [];  
  function roll(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; i ++) {
        roll(arr[i]);
      }
    }
    else {
      inner.push(arr);
    }
  } 
  roll(arr);
  return inner; 
}

//steamroller(3);
//steamroller([3, [[4]]]);
steamroller([1, [2], [3, [[4]]]]);
