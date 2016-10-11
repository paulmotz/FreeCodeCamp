function add() {
  var first = arguments[0]; 
  if (typeof first !== 'number') return undefined;
  if (arguments.length == 2) {
    if (typeof arguments[1] !== 'number') return undefined;
    return first + arguments[1];
  }
  else {
    return function(x) {
      if (typeof x !== 'number') return undefined;
      return first + x;
    };
  }
}

//add("http://bit.ly/IqT6zt");
//add(2,3);
//add(2)(3);
//add(2)([3]);
add(2,[3]);


//8:39 start 10:22 end. 1 hr 43 min total ~= 17 min per problem