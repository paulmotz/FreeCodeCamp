/*
 * Issues/improvement ideas:
 * box shadow does not animate
 */

// https://css-tricks.com/long-dropdowns-solution/

var apiKey = '0UtiFgWjsomshTy6owOEQfzXXCVMp1bMk0bjsnHu8mdp0q5ZCj';

var quote = '';
var author = '';
var maxHeight = 400;
var transition = 800;
var selectedTeam = 'Random';
var randomTeam;
var prevTeamId = '';

var teamInfo = {"Anaheim" : {"abr" : "ANA", "colors" : ["#000000", "#91764B", "#EF5225"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Anaheim_Ducks.svg/1280px-Anaheim_Ducks.svg.png", 'name' : 'Ducks', 'Rating' : 3},
                  "Arizona" : {"abr" : "ARI", "colors" : ["#841F27", "#000000", "#EFE1C6"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Arizona_Coyotes.svg/1024px-Arizona_Coyotes.svg.png", 'name' : 'Coyotes', 'Rating' : 9},
                  "Boston" : {"abr" : "BOS", "colors" : ["#000000", "#FFC422", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/1024px-Boston_Bruins.svg.png", 'name' : 'Bruins', 'Rating' : 5},
                  "Buffalo" : {"abr" : "BUF", "colors" : ["#002E62", "#FDBB2F", "#AEB6B9"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Buffalo_Sabres_Logo.svg/1024px-Buffalo_Sabres_Logo.svg.png", 'name' : 'Sabres', 'Rating' : 4},
                  "Calgary" : {"abr" : "CAL", "colors" : ["#E03A3E", "#FFC758", "#000000"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Calgary_Flames_Logo.svg/1201px-Calgary_Flames_Logo.svg.png", 'name' : 'Flames', 'Rating' : 7},
                  "Carolina" : {"abr" : "CAR", "colors" : ["#E03A3E", "#000000", "#8E8E90"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Carolina_Hurricanes.svg/1280px-Carolina_Hurricanes.svg.png", 'name' : 'Hurricanes', 'Rating' : 6},
                  "Chicago" : {"abr" : "CHI", "colors" : ["#E3263A", "#000000", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/ChicagoBlackhawksLogo.svg/1141px-ChicagoBlackhawksLogo.svg.png", 'name' : 'Blackhawks', 'Rating' : 7},
                  "Colorado" : {"abr" : "COL", "colors" : ["#8B2942", "#01548A", "#000000", "#A9B0B8"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/1249px-Colorado_Avalanche_logo.svg.png", 'name' : 'Avalanche', 'Rating' : 6},
                  "Columbus" : {"abr" : "CLB", "colors" : ["#00285C", "#E03A3E", "#A9B0B8"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Columbus_BlueJackets.svg/1186px-Columbus_BlueJackets.svg.png", 'name' : 'Blue Jackets', 'Rating' : 4},
                  "Dallas" : {"abr" : "DAL", "colors" : ["#006A4E", "#000000", "#C0C0C0"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Dallas_Stars_2013_crest.svg/1235px-Dallas_Stars_2013_crest.svg.png", 'name' : 'Stars', 'Rating' : 7},
                  "Detroit" : {"abr" : "DET", "colors" : ["#EC1F26", "#FFFFFF", "#000000"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1280px-Detroit_Red_Wings_logo.svg.png", 'name' : 'Red Wings', 'Rating' : 7},
                  "Edmonton" : {"abr" : "EDM", "colors" : ["#003777", "#E66A20", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/768px-Logo_Edmonton_Oilers.svg.png", 'name' : 'Oilers', 'Rating' : 6},
                  "Florida" : {"abr" : "FLA", "colors" : ["#C8213F", "#002E5F", "#D59C05"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Florida_Panthers.svg/1047px-Florida_Panthers.svg.png", 'name' : 'Panthers', 'Rating' : 4},
                  "Los Angeles" : {"abr" : "LAK", "colors" : ["#000000", "#AFB7BA", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Los_Angeles_Kings_Logo_(2011).svg/855px-Los_Angeles_Kings_Logo_(2011).svg.png", 'name' : 'Kings', 'Rating' : 7},
                  "Minnesota" : {"abr" : "MIN", "colors" : ["#025736", "#BF2B37", "#EFB410", "#EEE3C7"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Minnesota_Wild.svg/1280px-Minnesota_Wild.svg.png", 'name' : 'Wild', 'Rating' : 7},
                  "Montreal" : {"abr" : "MON", "colors" : ["#BF2F38", "#213770", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/2000px-Montreal_Canadiens.svg.png", 'name' : 'Canadiens', 'Rating' : 8},
                  "Nashville" : {"abr" : "NAS", "colors" : ["#FDBB2F", "#002E62", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Nashville_Predators_Logo_(2011).svg/1280px-Nashville_Predators_Logo_(2011).svg.png", 'name' : 'Predators', 'Rating' : 7},
                  "New Jersey" : {"abr" : "NJD", "colors" : ["#E03A3E", "#000000", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/1018px-New_Jersey_Devils_logo.svg.png", 'name' : 'Devils', 'Rating' : 6},
                  "New York Islanders" : {"abr" : "NYI", "colors" : ["#00529B", "#F57D31", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NewYorkIslandersOld.svg/1024px-NewYorkIslandersOld.svg.png", 'name' : 'Islanders', 'Rating' : 6},
                  "New York Rangers" : {"abr" : "NYR", "colors" : ["#0161AB", "#E6393F", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/2000px-New_York_Rangers.svg.png", 'name' : 'Rangers', 'Rating' : 6},
                  "Ottawa" : {"abr" : "OTT", "colors" : ["#E4173E", "#000000", "#D69F0F"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Ottawa_Senators.svg/868px-Ottawa_Senators.svg.png", 'name' : 'Senators', 'Rating' : 5},
                  "Philadelphia" : {"abr" : "PHI", "colors" : ["#F47940", "#000000", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Philadelphia_Flyers.svg/1280px-Philadelphia_Flyers.svg.png", 'name' : 'Flyers', 'Rating' : 7},
                  "Pittsburgh" : {"abr" : "PIT", "colors" : ["#CCCC99", "#000000", "#FFCC33"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Pittsburgh_Penguins_logo.svg/1093px-Pittsburgh_Penguins_logo.svg.png", 'name' : 'Penguins', 'Rating' : 2},
                  "San Jose" : {"abr" : "SJS", "colors" : ["#05535D", "#F38F20", "#000000"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/1258px-SanJoseSharksLogo.svg.png", 'name' : 'Sharks', 'Rating' : 9},
                  "St Louis" : {"abr" : "STL", "colors" : ["#0546A0", "#FFC325", "#101F48"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/StLouis_Blues.svg/1280px-StLouis_Blues.svg.png", 'name' : 'Blues', 'Rating' : 9},
                  "Tampa Bay" : {"abr" : "TAM", "colors" : ["#013E7D", "#FFFFFF", "#C0C0C0"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/1098px-Tampa_Bay_Lightning_Logo_2011.svg.png", 'name' : 'Lightning', 'Rating' : 4},
                  "Toronto" : {"abr" : "TOR", "colors" : ["#003777", "#FFFFFF", "#000000"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Toronto_Maple_Leafs_logo.svg/954px-Toronto_Maple_Leafs_logo.svg.png", 'name' : 'Maple Leafs', 'Rating' : 8},
                  "Vancouver" : {"abr" : "VAN", "colors" : ["#07346F", "#047A4A", "#A8A9AD"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Vancouver_Canucks_Home_Logo.svg/1062px-Vancouver_Canucks_Home_Logo.svg.png", 'name' : 'Canucks', 'Rating' : 6},
                  "Washington" : {"abr" : "WAS", "colors" : ["#CF132B", "#00214E", "#FFFFFF"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Washington_Caps_Alternate.svg/1280px-Washington_Caps_Alternate.svg.png", 'name' : 'Capitals', 'Rating' : 8},
                  "Winnipeg" : {"abr" : "WIN", "colors" : ["#002E62", "#0168AB", "#A8A9AD"], "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/1024px-Winnipeg_Jets_Logo_2011.svg.png", 'name' : 'Jets', 'Rating' : 6}};

var abr = {};

var teams = Object.keys(teamInfo);

for (team in teams) {
  abr[teamInfo[teams[team]].abr] = teams[team];
}

var exceptions = ["Toronto", "Tampa Bay"];

function getQuote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    headers: {
      // see: https://market.mashape.com/andruxnet/random-famous-quotes
      "X-Mashape-Key": apiKey,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    type: "GET",
    success: function(response) {
      if (selectedTeam === 'Random') {
        changeTeamRandom();
      }
      var resp = JSON.parse(response);
      quote = resp.quote;
      author = resp.author;
      $('#quote').animate({
        opacity: 0
      }, transition/2,
      function() {
        $('#quote').animate({
          opacity: 1
        }, transition/2),  
        $('#quote').html(quote + '<br>' + '-' + author);
      });
    }
  });
}

function populateMenu() {
  $('#random').on('click', function () {
    selectedTeam = 'Random';
    $('#random').css('background-color', 'orange');
    changeTeamRandom();
  });
  for (var team in teams) {
    (function(team) {
      var currTeam = teams[team];
      var teamId = teamInfo[currTeam].abr;
      $('.dropdown-menu').append('<li id=' + teamId + '><img src=' + teamInfo[currTeam].logo + ' height=15px>' + ' ' + currTeam + '</li>');
      $('#'+teamId).on('click', function() {
        selectedTeam = currTeam;
        changeTeam(abr[teamId]);
        $('#'+teamId).css('background-color', 'orange');
        prevTeamId = '#'+teamId;
      });
    })(team);
  }
}

function changeTeam(team) {
  $(prevTeamId).removeClass().attr('style', '');
  if (selectedTeam !== 'Random') {
    $('#random').removeClass().attr('style', '');
  }
  var drawColors = [];
  drawColors = teamInfo[team].colors;
  var logo = teamInfo[team].logo;
  if (exceptions.indexOf(team) !== -1) {
    $('#logo').addClass("styled-box");
  }
  else {
    $('#logo').removeClass().attr('style', '');
  }
  $('body').animate({
    backgroundColor: drawColors[0]
  }, transition);
  $('.styled-box').animate({
    backgroundColor: drawColors[1],
    borderColor: drawColors[2]
  }, transition);
  $('#content').animate({
    color: drawColors[2]
  }, transition);
  if (drawColors[3]) {
    $('.styled-box').css("box-shadow", "0 0  10px" + drawColors[3]);
  }
  else {
    $('.styled-box').css("box-shadow", "0 0  10px" + drawColors[1]);
  }
  $(".btn").animate({
    color: drawColors[1],
    backgroundColor: drawColors[2]
  }, transition);
  $('#logo').html("<img src="+logo+" height=50px>");
}

function changeTeamRandom() {
  var team = teams[Math.floor(Math.random()*teams.length)];
  randomTeam = team;
  changeTeam(team);
}

function tweet(){
  var choice = selectedTeam === 'Random' ? teamInfo[randomTeam].name : teamInfo[selectedTeam].name;
  var hashtags = 'quotes,' + choice;
  var teamHashtagLength = choice.length + 2; // 2 = space + hash
  var hashtagLength = 8 + teamHashtagLength; // 8 = space + hash + "quotes"
  var tweetLength = quote.length + author.length + 3 + hashtagLength; // 3 = two quotes + one space between quote and author
  // console.log(quote.length);
  // console.log(author.length);
  // console.log(tweetLength);
  // console.log();
  if (tweetLength > 140 + teamHashtagLength) {
    alert("Your tweet is too long!")
  }
  else if (tweetLength > 140) {
    var r = confirm("Your tweet is just too long!\nRemoving hashtags will make it short enough.\nDo you want to remove hashtags?");
    if (r) {
      var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author);
     window.open(url, 'Tweet', 'width=800, height=450');
    }
  }
  else {
    // var r = confirm("Your tweet is just too long!\nRemoving hashtags will make it short enough.\nDo you want to remove hashtags?");
    // if (r) {
    //   var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author);
    //  window.open(url, 'Tweet', 'width=800, height=450');
    // }
    var url = 'https://twitter.com/intent/tweet?hashtags=' + hashtags + '&text=' + encodeURIComponent('"' + quote + '" ' + author);
    window.open(url, 'Tweet', 'width=800, height=450');
  }
}

function fadeIn() {
  $('#description').css('opacity', 0);
  $('#description').animate({
    opacity: 1
  }, transition);
  $('#new').css('opacity', 0);
  $('#new').animate({
    opacity: 1
  }, transition);
  $('#twitter').css('opacity', 0);
  $('#twitter').animate({
    opacity: 1
  }, transition);
  $('#select-button').css('opacity', 0);
  $('#select-button').animate({
    opacity: 1
  }, transition);
}

$(document).ready(function() {
  getQuote();
  populateMenu();
  fadeIn();

  // buttons
  $('#new').on('click', getQuote);
  $('#twitter').on('click', function() {
    tweet();
  });
});
