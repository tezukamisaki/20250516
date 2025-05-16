$(function() {
    // jQueryを記述
 $(window).scroll(function() {
   $("p").html("Scroll:" + $(this).scrolltop() + "px")
   .css("color", "#FF0000");
   css("fontsize", "24px"); 
  });
  });