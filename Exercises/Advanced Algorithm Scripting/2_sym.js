function sym(args) {
  var symDif = [];
  for (var i = 0; i < arguments.length; i++) {
    symDif = filterTwo(arguments[i], symDif).concat(filterTwo(symDif, arguments[i]));
  }
  var uniSymDif = [];
  for (var i = 0; i < symDif.length; i++) {
    if (uniSymDif.indexOf(symDif[i]) === -1) uniSymDif.push(symDif[i]);
  }
  return uniSymDif;
}


function filterTwo(arr1, arr2) {
  return arr1.filter(function(value) {
    return arr2.indexOf(value) === -1;
  });
}



//filterTwo([1, 2, 3], [5, 2, 1, 4]);

//sym([1, 2, 3], [5, 2, 1, 4]);
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
