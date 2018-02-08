'use strict';
$(function() {
	$('.owl-block').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
			},
			570 : {
				items:2,
			},
			980 : {
				items:4,
			},
			1400 : {
				items:5,
			}
		}
	});	
	$('.owl-four').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:1,
				margin: 0,
				dots: false,
			},
			570 : {
				items:3,
				dots: false,
			},
			980 : {
				items:3,
			},
			1400 : {
				items:4,
			}
		}
	});	
	$('.owl-seven').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: true,
		smartSpeed: 500,
		margin: 30,
		//loop: true,
		//mouseDrag: false,
		responsive : {
			0 : {
				items:2,
				dots: false,
			},
			570 : {
				items:4,
				dots: false,
			},
			980 : {
				items:5,
			},
			1400 : {
				items:7,
			}
		}
	});	
	$('.owl-one').owlCarousel({
		navText: ['<svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-prev"></use></svg>', '<svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#owl-next"></use></svg> '],
		nav: true,
		dots: false,
		smartSpeed: 500,
		loop: true,		
		items:1,
		margin: 0
	});	
});