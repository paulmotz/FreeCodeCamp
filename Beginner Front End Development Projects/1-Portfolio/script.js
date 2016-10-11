$(document).ready(function() {
  alignOverlay();
  $(window).resize(function() {
    alignOverlay();
  });
});

function alignOverlay () {
  var $pWidth = parseInt($('.project').css('width'));
  var $oWidth = parseInt($('.project-overlay').css('width'));
  var m = ($pWidth - $oWidth) / 2;
  $('.project-overlay').css('margin', '0 ' + m + 'px');
}
