function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var periods = [];
  for (var i = 0; i < arr.length; i++) {
    var a = earthRadius + arr[i].avgAlt;
    var period =  Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3)/GM));
    var obj = {name : arr[i].name, orbitalPeriod : period};
    periods.push(obj);
  }
  return periods;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

