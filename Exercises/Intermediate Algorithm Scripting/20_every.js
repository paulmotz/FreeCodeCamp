function every(collection, pre) {
  // Is everyone being true?
  for (var item in collection) {
    fields = Object.keys(collection[item]);
    var found = false;
    for (var field in fields) {
      if (fields[field] === pre && collection[item][fields[field]]) found = true;
    }
    if (!found) return false;
  }
  return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
