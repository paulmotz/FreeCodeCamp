function palindrome(str) {
  // Good luck!
  // remove all non-alphanumeric characters
  var re = /[^a-z0-9]/gi;
  str = str.replace(re, "").toLowerCase();
  var end = str.length - 1;
  var mid = Math.ceil((end)/2);
  for (var i = 0; i < mid; i++) {
    if (str[i] != str[end - i]) {
      return false;
    }
  }
  return true;
  
}



palindrome("eye");
//palindrome("racecar");
//palindrome("A man, a plan, a canal. Panama");
//palindrome("never odd or even");
