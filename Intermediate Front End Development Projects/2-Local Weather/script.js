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
  console.log(current);
  // current = "clear-sky";
  if (current === "clear-sky") {
    $(".report-icon").html("<i class='fa fa-sun-o fa-fw'></i>");
    $("body").animate({
      backgroundColor: "#1192d3",
    }, transition);
    $(".content").animate({
      // color: "yellow"
    }, transition);
    $(".temp").animate({
      backgroundColor: "#FFF", 
    })
  }
  else if (current === "scattered-clouds") {
    $(".report-icon").html("<i class='fa fa-cloud fa-fw'></i>");
    $(".report-icon").css("opacity", "0.3");
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
    $(".report-icon").html("<i class='fa fa-sun-o fa-fw'></i>");
    $("body").animate({
      backgroundColor: "#000",
    }, transition);
    $(".content").animate({
      color: "yellow"
    }, transition);
  }
  else if (current === "mostly-cloudy") {
    $(".report-icon").html("<i class='fa fa-cloud fa-fw'></i><i class='fa fa-cloud fa-fw'></i><i class='fa fa-cloud fa-fw'></i>");
    $("body").animate({
      backgroundColor: "#222",
    }, transition);
    $(".content").animate({
      color: "#d0e2ed"
    }, transition);
  }
  else if (current === "partly-cloudy") {
    $(".report-icon").html("<i class='fa fa-cloud fa-fw'></i><i class='fa fa-sun-o fa-fw'></i><i class='fa fa-cloud fa-fw'></i>");
    $("body").animate({
      backgroundColor: "#333",
    }, transition);
    $(".content").animate({
      color: "#d0e2ed"
    }, transition);
  }
}

function describe(current) {
  if (current === "clear sky") {
    return "with a clear sky";
  }
  else if (current === "scattered clouds") {
    return "with scattered clouds";
  }
}

$(document).ready(function() {
  $.getJSON("http://ip-api.com/json?fields=city,lat,lon,region,regionName", function(response) {
    var lat = response.lat;
    var lon = response.lon;
    // lat = 12;
    // lon = 23;
    var region = response.region;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + lat + "&lon=" + lon + "&appid=" + key, function(response) {
    // $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key, function(response) {
      console.log(response);
      console.log(response.main );
      $(".loading").hide();
      $(".report").show();
      tempC = response.main.temp;
      tempF = tempC * 9 / 5 + 32;
      updateColor();
      var current = response.weather[0].description;
      var description = describe(current);
      $('.weather').html(description);
      current = (current.replace(" ", "-"));
      addIcon(current);
      // $(".report-image").addClass(current);
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
});
