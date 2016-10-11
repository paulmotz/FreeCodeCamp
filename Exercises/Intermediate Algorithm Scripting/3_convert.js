function convert(num) {
  var romanNum = '';
  var arabic = [1000, 900 , 500, 400,  100, 90  , 50,    40,  10,    9,   5,    4,   1];
  var roman =  ['M' , 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (var i = 0; i < arabic.length; i ++) {
    while (num >= arabic[i]) {
      num -= arabic[i];
      romanNum += roman[i];
    }
  }
  return romanNum;
}

convert(12);
