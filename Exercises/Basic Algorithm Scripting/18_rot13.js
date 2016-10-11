function rot13(str) { // LBH QVQ VG!
  var newString = '';
  for (var i = 0; i < str.length; i++) {
    var asciiCode = str.charCodeAt(i);
    if ((asciiCode >= 65) && (asciiCode <= 90)) {
      newString += String.fromCharCode(((str.charCodeAt(i) + 13) - 65) % 26 + 65);
    }
    else {
      newString += str[i];
    }
  }
  return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// took ~2h (~10:50-12:50) to complete bonfires. Estimated time was 50h