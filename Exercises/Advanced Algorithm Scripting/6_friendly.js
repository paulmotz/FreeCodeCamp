function friendly(str) {
  // months of the year
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
  // first date
  var date0 = str[0].split('-');
  var year0 = Number(date0[0]);
  var month0 = months[date0[1]-1] + " ";
  var day0 = fancyDay(Number(date0[2]));
  
  // second date
  var date1 = str[1].split('-');
  var year1 = Number(date1[0]);
  var month1 = months[date1[1]-1] + " ";
  var day1 = fancyDay(Number(date1[2]));
    
  // deal with JavaScript dates
  var today = new Date().getFullYear();
  var d0 = new Date(year0, date0[1] - 1, Number(date0[2]));
  var d1 = new Date(year1, date1[1] - 1, Number(date1[2]));
    
  // difference between dates in days
  var dayDiff = (d1.getTime() - d0.getTime()) / (1000 * 3600 * 24);
      
  // formatting, dropping redundant info
  if (year0 === year1) {
    year1 = '';
    if (month0 === month1) {
      month1 = '';
      if (day0 === day1) day1 = '';
    }
  }
  if (dayDiff < 365) {
    year1 = '';    
  }
  /*
  if (year0 === year1 || dayDiff < 365) {
    year1 = '';
    if (month0 === month1) {
      month1 = '';
      if (day0 === day1) day1 = '';
    }
  }*/
  
  else year1 = ', ' + year1;
  if (today === year0 && dayDiff < 365) year0 = '';
  else year0 = ', ' + year0;
  
  date0 = month0 + day0 + year0;
  date1 = month1 + day1 + year1;
  
  if (dayDiff === 0) return [date0];

  return [date0, date1];
}



function fancyDay(day) {
  var ordinals = ['th', 'st', 'nd', 'rd'];
  return day + (ordinals[(day - 20) % 10] || ordinals[day] || ordinals[0]);
}

// funciton to test fancyDay function
function fancyDayLoop(days) {
  var month = [];
  for (var i = 1; i <= days; i++) month.push(fancyDay(i));
  return month;
}


//fancyDayLoop(31);
//friendly(['2016-07-01', '2016-07-04']);
//friendly(["2016-12-01", "2017-02-03"]);
//friendly(["2016-12-01", "2018-02-03"]);
//friendly(["2018-01-13", "2018-01-13"]);
friendly(["2022-09-05", "2023-09-04"]);
//friendly(["2022-09-05", "2023-09-05"]);

