$(function() {
    // jQueryを記述
    $("a").hover(function() {
      $(this).css("color","#00FF00");
    },function(){
      $(this).css("color","#0000FF");
    });
  });