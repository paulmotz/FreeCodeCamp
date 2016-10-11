function where(collection, source) {
  // What's in a name?
  var arr = [];
  var fields = Object.keys(source);
  for (var key in collection) {
    var pushed = false;
    var match = true;
    for (var field in fields) {
      if (collection[key][fields[field]] !== source[fields[field]]) {
        match = false;
      }
    }
    if (!pushed && match) {
      arr.push(collection[key]);
      pushed = true;
    }
  }
  return arr;
  
  
  
  
  /*
  var fields = Object.keys(source);
  var property =  source[fields];
  var arr = [];
  for (var key in collection) {
    for (var field in fields) {
      console.log(collection[key]);
      console.log(fields);
      console.log(fields.fields[field]);
      console.log(collection[key].hasOwnProperty(fields[field]));
      if (!collection[key].hasOwnProperty(fields[field])) {
        console.log(collection[key]);
        break;
      }
      //console.log(fields[field]);
      //console.log(key, collection[key][fields[field]]);
      //if (collection[key][fields[field]] !== field) {
        //return collection[key][fields[field]];
      
    }
    arr.push(collection[key]);
  }
  return arr;
  */
}

//where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
