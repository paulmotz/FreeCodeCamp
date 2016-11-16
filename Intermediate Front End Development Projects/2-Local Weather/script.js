// https://openweathermap.org/current
// API key: 86cc6b3f26b3cac959916adda84c679b
// https://developer.yahoo.com/weather/documentation.html
// Kitchener = 43.4, -80.5
// Waterloo = 43.5, -80.6

var key = "86cc6b3f26b3cac959916adda84c679b";
var tempC;
var tempF = Math.round(tempC * 9 / 5 + 32);
var tempCString = tempC + " &#8451";
var tempFString = tempF + " &#8457";

var C = true;
var color;

var transition = 800;

function updateColor() {
  var colorMod = 255 - 16 * Math.abs(tempC-20);
  if (tempC === 20) {
    color = "rgb(255,255,255)";
  }
  else if (tempC < 20) {
    color = "rgb("+colorMod+","+colorMod+",255)";
  }
  else {
    color = "rgb(255," + colorMod + "," + colorMod +")";
  }
  $(".temp").css("color", color);
}

function addIcon(current) {
  // current = "light-rain";
  if (current === "clear-sky") {
    $(".report-icon").html("<i class='wi wi-day-sunny'></i>");
    $("body").animate({
      backgroundColor: "#1192d3",
    }, transition);
    $(".content").animate({
      color: "#FFF"
    }, transition);
    $(".temp").animate({
      backgroundColor: "#FFF", 
    })
  }
  else if (current === "broken-clouds" || current === "few-clouds" || current === "overcast-clouds" || current === "partly-cloudy" || current === "scattered-clouds") {
    $(".report-icon").html("<i class='wi wi-day-cloudy'></i>");
    // $(".report-icon").css("opacity", "0.8");
    $("body").animate({
      backgroundColor: "#777",
    }, transition);
    $(".content").animate({
      // color: "yellow",
    }, transition);
    $(".temp").animate({
      backgroundColor: "#FFF", 
    })
  }
  else if (current === "sunny") {
    $(".report-icon").html("<i class='wi wi-day-sunny'></i>");
    $("body").animate({
      backgroundColor: "#1192d3",
    }, transition);
    $(".content").animate({
      color: "yellow"
    }, transition);
    $(".temp").animate({
      backgroundColor: "yellow", 
    });
  }
  else if (current === "mostly-cloudy") {
    $(".report-icon").html("<i class='wi wi-cloudy'></i>");
    $("body").animate({
      backgroundColor: "#222",
    }, transition);
    $(".content").animate({
      color: "#d0e2ed"
    }, transition);
  }
  else if (current.match(/rain/)) {
    if (current === "light-rain") {
      $(".report-icon").html("<i class='wi wi-showers'>");
    }
    else if (current === "moderate-rain") {
      $(".report-icon").html("<i class='wi wi-rain-mix'>");
    }
    else {
      $(".report-icon").html("<i class='wi wi-rain'>");
    }
    $("body").animate({
      backgroundColor: "#333",
    }, transition);
    $(".content").animate({
      color: "#d0e2ed"
    }, transition);
  }
}

function describe(current) {
  // console.log(current);
  if (current === "clear sky") {
    return "with a clear sky";
  }
  else if (current.match(/clouds/) || current.match(/rain/)) {
    return "with " + current;
  }
}

$(document).ready(function() {
  $.getJSON("http://ip-api.com/json?fields=city,lat,lon,region,regionName", function(response) {
    var lat = response.lat;
    var lon = response.lon;
    var region = response.region;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&appid=" + key, function(response) {
      // console.log(response);
      // console.log(response.main);
      $(".loading").hide();
      $(".report").show();
      tempC = response.main.temp;
      tempF = tempC * 9 / 5 + 32;
      updateColor();
      var current = response.weather[0].description;
      var description = describe(current) + "<br>";
      $('.weather').html(description);
      current = (current.replace(" ", "-"));
      addIcon(current);
      $('.city').html(response.name + ", " + region);
      if (C) {
        $(".temp").html(Math.round(tempC) + " &#8451");
      }
      else {
        $(".temp").html(Math.round(tempF) + " &#8457");
      }
      $(".temp").on("click", function() {
        if (C) {
          C = false;
          $(".temp").html(Math.round(tempF) + " &#8457");
        }
        else {
          C = true;
          $(".temp").html(Math.round(tempC) + " &#8451");
        }
      });
    });
  })
  // randomLocations();
});

// used to get weather from a variety of locations using random latatiude and longitudes
function randomLocations() {
  var descriptions = [];   
  for (var i = 0; i < 1000; i ++) {
    var lat = Math.round(Math.random() * 180 - 90);
    var lon = Math.round(Math.random() * 360 - 180);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&appid=" + key, function(response) {
      var current = response.weather[0].description;
      if (descriptions.indexOf(current) === -1) {
        descriptions.push(current);
        console.log(current);
      }
    });
  } 
}

