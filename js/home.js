$('.carousel').carousel({
    interval: 5000
});

$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $("nav").css("background-color", "black");
  } else {
    $("nav").css("background-color", "transparent");
  }
});
