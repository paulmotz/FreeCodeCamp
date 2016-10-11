function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  function checkInventory(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][1] === item) return i;
    }
    return -1;
  }
  
  for (var i = 0; i < arr2.length; i++) {
    var index = checkInventory(arr1, arr2[i][1]);
    if (index !== -1) {
      arr1[index][0] += arr2[i][0];
    }
    else arr1.push(arr2[i]);
  }
  return arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//inventory(curInv, newInv);
inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
