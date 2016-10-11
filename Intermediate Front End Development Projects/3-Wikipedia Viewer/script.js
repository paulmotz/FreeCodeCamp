$(".search-box").on("keypress", function(e) {
  if (e.which === 13) {
    search();
  }
});

$(".search-button").on("click", function() {
  search();
});

function search() {
  $(".results").html("");
  var searchString = $(".search-box").val();
  var numResults = $(".result-options").val();
    
  // from: https://www.mediawiki.org/wiki/API:Search_and_discovery
  $.ajax({    
    url : '//en.wikipedia.org/w/api.php?&exlimit=10',
    data: { action: 'query', generator: 'search', gsrsearch: searchString, prop: "extracts", exsentences: 1, exintro: 1, explaintext: 1, gsrlimit: numResults, format: 'json' },
    // data: { action: 'query', list: 'search', srsearch: searchString, srlimit: numResults, format: 'json' },
    // data: { action: 'opensearch', search: searchString, limit: numResults, format: 'json' },
    dataType: 'jsonp',
    success: function (d) {
      if (d.warnings) {
        console.log(d.warnings.main);
      }
      var results = d.query.pages;
      for (var key in results) {
        var title = results[key].title;
        var snippet = results[key].extract;
        $(".results").append("<a href='https://en.wikipedia.org/?curid=" + key + "' target='_blank'><div class='result'><h2 class='title'>" + title + "</h2><p class='snippet'>" + snippet + "</p></div></a>");
      }
    }
  });
}

$(document).ready(function() {
  for (var i = 1; i <= 20; i++) {
    $(".result-options").append("<option value=" + i + ">" + i + "</option>");
  }
  $(".result-options").val(10); // use 10 as the default value
});
