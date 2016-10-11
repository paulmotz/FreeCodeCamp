function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falco
 
  // iterative solution
  /* 
  var strLength = str.length;
  var tarLength = target.length;
  
  for (var i = 1; i <= tarLength; i++) {
    if (str[strLength - i] != target[tarLength - i]) return false;
  }
  return true;
  */
  
  // one-liner
  return target === str.substr(str.length - target.length, str.length);
}

end("Bastian", "n");
