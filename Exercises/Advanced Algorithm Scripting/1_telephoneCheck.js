function telephoneCheck(str) {
  // Good luck!
  var re = /^(1\s?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}?(\s|-)?\d{4}$/;
  return re.test(str);
}



//telephoneCheck("555-555-5555");
//telephoneCheck("1 555-555-5555");
//telephoneCheck("5555555555");
//telephoneCheck("1 555)555-555");
//telephoneCheck("(6505552368)");
telephoneCheck("555)-555-5555");

// ? 1:25 start - 1:41 = 16 min...break