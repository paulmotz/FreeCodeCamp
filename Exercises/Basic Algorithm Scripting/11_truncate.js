function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num >=str.length) {
    return str;
  }
  else if (num <= 3) {
    return str.slice(0, num) + "...";
  }
  else {
    return str.slice(0, num - 3) + "...";
  }
}

//truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//truncate("A-tisket a-tasket A green and yellow basket", 2);
