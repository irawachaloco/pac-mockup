


jQuery(function(){
  initScrollMagic();
  dropdownMenu();
  mobileMenuButton();
  searchInput();
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
		$(this).next().toggleClass("open");
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







