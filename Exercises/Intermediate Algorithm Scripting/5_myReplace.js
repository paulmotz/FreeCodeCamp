function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1, after.length);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 1hr 20 min to do 5. 1 hour 20 min total, 16 min per problem
/// 80 min * 21 / 5 = 336 min = 5 hr 36 min < 50 hr on FCC