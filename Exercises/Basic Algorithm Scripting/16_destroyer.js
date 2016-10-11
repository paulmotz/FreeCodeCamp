function destroyer(arr) {
  // Remove all the values
  num_arguments = arguments.length;
  additional_arguments = [];
  for (var i = 1; i < num_arguments; i++) {
    additional_arguments.push(arguments[i]);
  }
  
  function contains(value) {
    for (var i = 0; i < additional_arguments.length; i ++) {
      if (value === additional_arguments[i]) {
        return false;
      }
    }
    return true;
  }
  
  arr = arr.filter(contains);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
