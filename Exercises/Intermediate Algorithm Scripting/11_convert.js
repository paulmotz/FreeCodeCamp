function convert(str) {
  // &colon;&rpar;
  var entities = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "'" : "&apos;",
    '"' : "&quot;"
  };
  function replaceFun(char) {
    return entities[char];
  }
  
  return str.replace(/&|<|>|"|'/gi, replaceFun);
}

//convert("Dolce & Gabbana");
convert("Shindler's List");


// start 3:00