function binaryAgent(str) {
  var bins = str.split(" ");
  var eng = '';
  for (var bin in bins) {
    eng += String.fromCharCode(getDecimal(bins[bin]));
  }
  return eng;
}

function getDecimal(bin) {
  // takes a binary number (string of eight characters) as input and returns its decimal representation
  var dec = 0;
  for (var i = bin.length - 1; i >= 0; i--) {
    dec += bin[i] * Math.pow(2, bin.length  - i - 1);
  }
  return dec;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
