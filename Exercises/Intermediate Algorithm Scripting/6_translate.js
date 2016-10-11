function translate(str) {
  var i = 0;
  while (!vowelTest(str[i])) {
    i++;
  }
  if (i === 0) {
    return str + "way";
  }
  else {
    return str.substr(i) + str.substr(0, i) + "ay";
  }
}

function vowelTest(char) {
  return (/^[aeiou]$/i).test(char);
}

//translate("consonant");
translate("glove");


// 6:50 start