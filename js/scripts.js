//Scroll to
//Example use
//<a href="#bottom" id="top">Click to scroll down</a>
//
//<div id="star">&star;</div>
//
//<a href="#top" id="bottom">Click to scroll up</a>

$(document).ready(function(){
    
    $('#scrolls').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 750,
        cssEase: 'linear',
        arrows: false,
//        fade: true
    });
    
    $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
    
    $(".greybutton").on("click", function(){
        if ($(this).hasClass("selected")){
            return;
        }
        else{
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
        }
        if ($(this).hasClass("sel1")){
            $("#sel2").fadeOut(200);
            $("#sel3").fadeOut(200);
            $("#sel1").delay(200).fadeIn(200);
        }
        else if ($(this).hasClass("sel2")){
            $("#sel1").fadeOut(200);
            $("#sel3").fadeOut(200);
            $("#sel2").delay(200).fadeIn(200);
        }
        else if ($(this).hasClass("sel3")){
            $("#sel1").fadeOut(200);
            $("#sel2").fadeOut(200);
            $("#sel3").delay(200).fadeIn(200);
        }
    });
    
    $(".menu-btn").on("click", function(){
        $(".mobile-menu").slideToggle(600);
    });
    
});