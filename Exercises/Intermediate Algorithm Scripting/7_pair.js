function pair(str) {
  var firsts = str.split('');
  var pairs = [["A", "T"],["C", "G"],["G","C"],["T", "A"]];
  var dna = [];
  for (var first in firsts) {
    for (var pair in pairs) {
      if (firsts[first] === pairs[pair][0]) {
        dna.push(pairs[pair]);
      }
    }
  }
  return dna;
}

pair("GCG");
