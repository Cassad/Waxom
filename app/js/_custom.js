document.addEventListener("DOMContentLoaded", function() {
//parallax
$('.main-header').parallax();
//preloader
$(".loaderInner").fadeOut(500);
$(".loader").delay(500).fadeOut("slow");
//menu-click
$(".navbar__menu-link").click(function(e){
  e.preventDefault();
  $(".navbar__menu-link").removeClass("navbar__menu-link--current");
  $(this).addClass("navbar__menu-link--current");
});
//wow
new WOW().init();


});



