function drawer(price, cash, cid) {
  // Here is your change, ma'am.
  var change = [];
  
  // use cents rather than dollars to avoid floating point messiness
  for (var i = 0; i < cid.length; i ++) {
    cid[i][1] *= 100;
  }
  var values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var owed = (cash - price) * 100;
  
  // assume cid is empty after change is given unless proven otherwise
  var empty = true;
  while (owed > 0) {
    for (var i = cid.length - 1; i >= 0; i--) {
      var counter = 0;
      while (owed >= values[i] && cid[i][1] > 0) {
        owed -= values[i];
        cid[i][1] -= values[i];
        counter++;
      }
      if (cid[i][1]) empty = false; // left over money, so cid is not empty
      if (counter) {
        change.push([cid[i][0], counter * values[i]]);
      }
    }
  }
  if (owed) return "Insufficient Funds";
  if (empty) return "Closed"; 
  
  // change back to cents
  for (var i = 0; i < change.length; i ++) {
    change[i][1] /= 100;
  }
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

