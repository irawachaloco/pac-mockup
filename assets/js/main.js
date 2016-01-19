


jQuery(function(){
  initScrollMagic();
  dropdownMenu();
  mobileMenuButton();
  lastOdd();
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

function lastOdd() {
	$(".square-item-25test:even").filter(":last").css({"background":"red"}); 
}







