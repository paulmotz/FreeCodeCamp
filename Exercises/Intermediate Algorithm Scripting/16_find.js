function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//8:39 start