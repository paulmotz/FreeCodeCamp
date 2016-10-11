function fearNotLetter(str) {
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) > str.charCodeAt(i - 1) + 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}

fearNotLetter("abce");
