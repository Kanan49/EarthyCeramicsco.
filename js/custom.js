(function () {
	'use strict';

	var tinyslider = function () {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

})()
	

	window.addEventListener('scroll', reveal);

	function reveal() {
		var reveals = document.querySelectorAll('.reveal');
	
		for (var i = 0; i < reveals.length; i++) {
			var windowheight = window.innerHeight;
			var revealtop = reveals[i].getBoundingClientRect().top;
			var revealpoint = 10;
	
			if (revealtop < windowheight - revealpoint) {
				reveals[i].classList.add('active');
			}
			else {
				reveals[i].classList.remove('active');
			}
		}
	}
	





