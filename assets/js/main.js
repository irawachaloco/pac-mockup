


jQuery(function(){
  initScrollMagic();
  dropdownMenu();
  mobileMenuButton();
  searchInput();
  initSlick();
});

function initScrollMagic() {

	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	// Fix-menu Handler
	var fixMenu = new ScrollMagic.Scene({

		triggerElement: ".menu-wrapper", 
		triggerHook: 0, 
		reverse: true, 
	})
	.setPin(".menu-wrapper")
	.addTo(controller);
	

}

function mobileMenuButton() {
	$(".mobile-menu-btn").click(function(e){
		e.preventDefault();
		$(this).next(".pac-menu").children(".menu-container").slideToggle();
		$('.child-menu').slideUp();
	});
}

function dropdownMenu() {
	$(".menu-dropdown").click(function(e){
		e.preventDefault();
		//alert('rana');
		$('.child-menu').slideToggle();
	});
}

function searchInput() {
	$(".search-form").hide();
	$(".show-search-btn").click(function(e){
		$(this).toggleClass("active");
		$(".search-form").animate({width: 'toggle'});
	});
}

//init initSlick
function initSlick() {	
	if(($(".slider").length > 0)){
			$(".slider").slick({
				slide:'.slide-item',
			    slidesToShow: 1,
				//slidesToScroll: 1,
				 //variableWidth: true,
				 arrows: true,
				 dots: true,
				 // centerMode: true,
				 //centerPadding: 10,
				 // slide: 'item',
				 //focusOnSelect: true,
				 autoplay: false,
				 //autoplaySpeed: 3000
				 //adaptiveHeight: true
				 //variableWidth: true,
				 //adaptiveHeight: true
				 infinite: false
			 //  slidesToShow: 3,
			 //  slidesToScroll: 1,
			 	  
			});
	}
	
}

$(document).ready(function(){
    $(".slider").slick({
		slide:'.slide-item',
	    slidesToShow: 1,
		//slidesToScroll: 1,
		 //variableWidth: true,
		 arrows: false,
		 dots: true,
		 // centerMode: true,
		 //centerPadding: 10,
		 // slide: 'item',
		 //focusOnSelect: true,
		 autoplay: false,
		 //autoplaySpeed: 3000
		 //adaptiveHeight: true
		 //variableWidth: true,
		 //adaptiveHeight: true
		 infinite: false
	 //  slidesToShow: 3,
	 //  slidesToScroll: 1,
  });
});






