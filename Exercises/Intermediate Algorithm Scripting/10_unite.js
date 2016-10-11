function unite(arr1, arr2, arr3) {
  var union = arr1.slice();
  for (var i = 1; i < arguments.length; i ++) {
    var toAdd = arguments[i].slice();
    toAdd = toAdd.filter(add);
    union = union.concat(toAdd);
  }
  function add(value) {
    return union.indexOf(value) === -1;
  }
  
  
  
  return union;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 6:50 start 7:50 end. 1 hour total, 12 min per problem