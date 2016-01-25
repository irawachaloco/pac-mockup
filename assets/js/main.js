jQuery(function(){
  initScrollMagic();
  dropdownMenu();
  mobileMenuButton();
  searchInput();
  initSlick();
});



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
		$(this).next('.child-menu').slideToggle();
	});
}

function searchInput() {
	$(".search-form").hide();
	$(".show-search-btn").click(function(e){
		$(this).toggleClass("active");
		$(".search-form").animate({width: 'toggle'});
	});
}

// ======== PLUGINS ========

//ScrollMagic
function initScrollMagic() {
	// init controller
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

//SlickSlider
function initSlick() {	
	if(($(".pac-slider").length > 0)){
			
			var $status = $('.pagingInfo');
			var $slickElement = $('.pac-slider');

			$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			    var i = (currentSlide ? currentSlide : 0) + 1;
			    $status.text(i + '/' + slick.slideCount);
			});

			$slickElement.slick({
				slide:'.slide-item',
				slidesToShow: 1,
				adaptiveHeight: false,
				//slidesToScroll: 1,
				 //variableWidth: true,
				arrows: true,
				dots: false,
				// centerMode: true,
				//centerPadding: 10,
				// slide: 'item',
				//focusOnSelect: true,
				autoplay: false,
				//autoplaySpeed: 3000
				//adaptiveHeight: true
				//variableWidth: true,
				//adaptiveHeight: true
				infinite: false,
				responsive: [
				{
				  breakpoint: 414,
				  settings: {
				    arrows: false
				  }
				}
				]
			});
	}
	
	
}









