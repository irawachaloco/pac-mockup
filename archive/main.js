jQuery(function(){
  initScrollMagic();
  dropdownMenu();
  //mobileMenuButton();
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
	$(".filter-menu-btn").click(function(e){
		if ( $(this).next('.filter-menu').length > 0 ) {
			e.preventDefault();
			$('.filter-menu-btn').not(this).next('.filter-menu').slideUp();
	    	$(this).next('.filter-menu').slideToggle();
		} 
	});
	$(".sub-menu-btn").click(function(e){
		//$(this).parent().siblings().toggle();
		if ( $(this).next('.sub-child-menu').length > 0 ) {
			e.preventDefault();
			if ($( window ).width() <= 1040) {
				$('.sub-menu-btn').not(this).next('.sub-child-menu').slideToggle();

				if ( $(this).next('.sub-child-menu').children('.filter-menu').length > 0 ) {
					$(this).next('.sub-child-menu').children('.filter-menu').slideToggle();
				}
				if ( $(this).next('.sub-child-menu').children('.filter-menu').length === 0 ) {
					$(this).next('.sub-child-menu').slideToggle();
				}
				// $(this).next('.sub-child-menu').slideToggle();
	    		
	    		
			}
			if ($( window ).width() >= 1040) {
				$('.sub-menu-btn').not(this).next('.sub-child-menu').slideUp();
	    		$(this).next('.sub-child-menu').slideToggle();
			}
			$('.sub-menu-btn').not(this).removeClass('active');
			$(this).toggleClass('active');
			
			
		}

	});
	$(".menu-btn").click(function(e){
		if ($( window ).width() <= 1040) {
			$(this).parent().siblings().toggle();
		}
		if ($( window ).width() >= 1040) {

		}
		if ( $(this).next('.child-menu').length > 0 ) {
			e.preventDefault();
			$('.menu-btn').not(this).next('.child-menu').slideUp();
	    	$(this).next('.child-menu').slideToggle();
	    	$(this).toggleClass('active');
		} 
	});
	// $(".menu-btn").click(function(e){
	// 	if ( $(this).next('.child-menu').length > 0 ) {
	// 		e.preventDefault();
	// 		$('.menu-btn').not(this).next('.child-menu').slideUp();
	//     	$(this).next('.child-menu').slideToggle();
	// 	} 
	// });
}



function searchInput() {
	if ($( window ).width() >= 1040) {
		$(".search-form").hide();
		$(".show-search-btn").click(function(e){
			$(this).toggleClass("active");
			$(".search-form").animate({width: 'toggle'});
		});
	}
}
function setUp() {
	var options = $('.menu-item').toArray().map(
  	function(menuOption){
    	var optn = {
      	isClosed: true,
        open: function(){
        	$(menuOption).children('.sub-menu').slideDown();
          hideOthers(optn);
          optn.isClosed = false;
        },
        close: function() {
        	$(menuOption).children('.sub-menu').slideUp();
          showAll();
          optn.isClosed = true;
        },
        toggle: function() {
        	if (optn.isClosed) { optn.open(); }
          else { optn.close();}
        },
        hide: function() {
        $(menuOption).hide();
        },
        show: function() {
        $(menuOption).show();
        }
      };
      $(menuOption).children('.btn').click(function(e){
        if($(menuOption).children('.sub-menu').length > 0){
          //console.log(optn);
            e.preventDefault();
            optn.toggle();
        }
      });   
      return optn;
    }
  );
 
  options.forEach(function(optn){
  console.log($(optn));
  console.log('perro');
  });
 
	function hideOthers(optn) {
  	if ($( window ).width() >= 1040) { return; }
  	options.forEach(function (opt) {
    	if(opt !== optn) {
      	opt.hide();
      }
    });
  }
  function showAll() {
    if ($( window ).width() >= 1040) { return; }
    options.forEach(function (opt) {
    
      opt.show();
    });
  }
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
		reverse: true 
	})
	.setPin(".menu-wrapper")
	.addTo(controller)

	if ($( window ).width() >= 1040) {
	// do some magic
	var fixSideBar = new ScrollMagic.Scene({
		triggerElement: ".fixed-side-section", 
		triggerHook: 0,
		offset: -67,
		reverse: true 
	})
	.setPin(".fixed-side-section")
	.addTo(controller)
	}
	
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









