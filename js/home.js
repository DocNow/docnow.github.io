$('.carousel').carousel({
    interval: 5000
});

// the single-page site homepage has a transparent menu bar for the 
// fullscreen carousel, but this needs to change to a black background
// as you scroll down the page or else the text of the page will run
// underneath it

$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $("nav").css("background-color", "black");
  } else {
    $("nav").css("background-color", "transparent");
  }
});

// when a user follows a link to a particular part of the one-page-site
// homepage they are scrolled to that location in the page and then the 
// history is updated to a url without the hash fragment. arguments could
// be had about whether this is a good idea. but the behavior is consistent
// with clicking on menu links when on the home page itself.

$(function() {
  var frag = window.location.hash;
  if (frag) {
    $('html, body').stop().animate({
        scrollTop: $(frag).offset().top
    }, 1500, 'easeInOutExpo');
    var loc = window.location;
    history.pushState("", document.title, loc.pathname + loc.search);
  }
});
