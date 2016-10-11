function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return arr1.filter(function(value) {return arr2.indexOf(value) === -1; }).concat(arr2.filter(function(value){return arr1.indexOf(value) === -1;}));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
