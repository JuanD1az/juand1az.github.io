// Navbar responsive
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Owl Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
	margin: 10,
	loop: true,
	autoplay: true,
	autoplayTiemout: 2000,
	autoplayHoverPause: true,
	responsive:{
	  0:{
		items: 1,
		nav: false
	  },
	  700:{
		items: 2,
		nav: false
	  },
	  1300:{
		items: 3,
		nav: false
	  }
	}
});

// JQuery mover contenedor
jQuery(document).ready(function(){
	var intro = $('.cd-intro-block'),
		projectsContainer = $('.cd-projects-wrapper');
	
	//show the projects slider if user clicks the show-projects button
	intro.on('click', 'a[data-action="show-projects"]', function(event) {
		event.preventDefault();
		intro.addClass('projects-visible');
		projectsContainer.addClass('projects-visible');
		//owl.trigger('play.owl.autoplay')
	});

	intro.on('click', function(event) {
		//projects slider is visible - hide slider and show the intro panel
		if( intro.hasClass('projects-visible') && !$(event.target).is('a[data-action="show-projects"]') ) {
			intro.removeClass('projects-visible');
			projectsContainer.removeClass('projects-visible');
			//owl.trigger('stop.owl.autoplay')
		}
	});
});
