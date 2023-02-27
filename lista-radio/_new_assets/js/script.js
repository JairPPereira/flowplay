$("div.textAudio").on('click', function () {
  new Waypoint.Sticky({
  element: $('.textAudio')[0],
  });});
soundManager.setup({
url: '../_assets/swf/',
onready: function() {
}
});
$("tr").click(function(){window.location.href=$(this).find("a").attr("href");});


$(document).ready(function() {
  var $window = $(window);
  var div2 = $('#fadeout');
  var div1 = $('#textBody');
  var div1_top = div1.offset().top;
  var div1_height = div1.height();
  var div1_bottom = div1_top + div1_height;
  console.log(div1_bottom);
  $window.on('scroll', function() {
    var scrollTop = document.documentElement.scrollTop;
    var viewport_height = $window.height();
    var scrollTop_bottom = scrollTop + viewport_height;
    div2.toggleClass('show', scrollTop > div1_top && (scrollTop + window.outerHeight - 400) < div1_bottom);
  });
});