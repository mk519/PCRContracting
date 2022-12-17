/*$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $("header").css("background-color", "#28353d");
        $("header").css("transition" , "300ms ease-in-out");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $("nav").css("background-color","#28353d");
        $("nav").css("transition" , "300ms ease-in-out");

      } else {
        $("header").css("background-color", "rgba(40, 53, 61, 0.7)");      
        $("nav").css("background-color","rgba(40, 53, 61, 0.7)");
       // $("nav").css("background-color","transparent");// if not, change it back to transparent
      } 
    });
  });*/


// Navigation: color change for screens larger than 1000 px
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened     
    if (($(document).scrollTop() > 50) && $(window).width() > 1000 ) {
      $("header").css("background-color", "#28353d");
      $("header").css("transition" , "300ms ease-in-out");
      $("nav").css("background-color","transparent");
      $("nav").css("transition" , "300ms ease-in-out");
      //alert('this should turn red on scroll');
    } 
    
  else if(($(document).scrollTop() < 50) && $(window).width() > 1000 ){
    $("header").css("background-color", "transparent");   
    $("header").css("border-bottom", "solid #f1f1f10b 1px");
    $("nav").css("background-color", "transparent");  


    //$("header").css("border-bottom", "none");
    //$("header").css("transition" , "50ms ease-in-out");
    //alert('is it');
  }

  else if (($(document).scrollTop() > 50) && $(window).width() < 1000 ) {
    $("header").css("background-color", "#28353d");
    $("header").css("transition" , "300ms ease-in-out");
    $("nav").css("background-color","#28353d");
    $("nav").css("transition" , "300ms ease-in-out");
    //alert('this should turn red on scroll');
  } 

  else if(($(document).scrollTop() < 50) && $(window).width() < 1000 ){
    $("header").css("background-color", "transparent");   
    $("header").css("border-bottom", "solid #f1f1f10b 1px");
    $("nav").css("background-color", "transparent");  
    //$("header").css("background-color", "rgba(40, 53, 61, 0.7)");   
    $("nav").css("background-color", "rgba(40, 53, 61, 0.9)");  
    //alert('is it');
  }

});
});


// Testimonial Slider
const ELS = (sel, par) => (par || document).querySelectorAll(sel);
const EL = (sel, par) => (par || document).querySelector(sel);
const mod = (n, m) => (n % m + m) % m;

ELS(".slider-wrapper").forEach(EL_par => {
  const EL_slider = EL(".slider", EL_par);
  const ELS_items = ELS(".item", EL_par);
  const sub = +EL_par.dataset.items ?? 1;
  const tot = Math.ceil(ELS_items.length / sub);
  let c = 0;
  
  const anim = () => EL_slider.style.transform = `translateX(-${c*100}%)`;
  const prev = () => (c = mod(c-1, tot), anim());
  const next = () => (c = mod(c+1, tot), anim());
  
  EL(".prev", EL_par).addEventListener("click", prev);
  EL(".next", EL_par).addEventListener("click", next);
});

// Toggle Menu off when clicked on body
// Note: Need to implement when clicked on menu again *****

$(function () {
  "use strict";
  
  function uncheckBox() {
    var isChecked = $("#nav-toggle").prop("checked");
    if (isChecked) {
      $("#nav-toggle").prop("checked", false);
    }
  }

  $("body").on("click", function () {
    uncheckBox();
  });

  $("#nav-toggle").on("click", function (e) {
    e.stopPropagation();
  });
});


// Magnify Pop up for Gallery

$(document).ready(function() {

	$('a.btn-gallery').on('click', function(event) {
	  event.preventDefault();
	  
	  var gallery = $(this).attr('href');
	  
	  $(gallery).magnificPopup({
		delegate: 'a',
		type:'image',
		gallery: {
		  enabled: true
		}
	  }).magnificPopup('open');
	});

});

// Scroll to top on page reload
$(document).ready(function(){
  $(this).scrollTop(0);
});