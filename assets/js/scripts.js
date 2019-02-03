$(document).ready(function(){

	$('.header__mobile-menu').on('click', function() {
		$(this).toggleClass('open');
		$('.header__menu').toggleClass('open');
	});

	$('.form-application__accept').on('click', function() {
		var formCheck = $(this).children('input').is( ":checked" );
		if (formCheck) {
			$(this).children('.form-application__accept-marker').addClass('checked');
		} else {
			$(this).children('.form-application__accept-marker').removeClass('checked');
		}
	});

	$('.equipment__button-more').on('click', function() {
		$(this).closest('.equipment__wrapper-mobile').addClass('open');
	});

	$('.calculator__button').on('click', function() {
		$(this).parent().children().removeClass('active');
		if ($(this).data('calculator') == 'elevator') {
			$(this).addClass('active');
			$('.calculator__elevator').addClass('active');
			$('.calculator__service').removeClass('active');
		}
		if ($(this).data('calculator') == 'service') {
			$(this).addClass('active');
			$('.calculator__service').addClass('active');
			$('.calculator__elevator').removeClass('active');
		}
	});

	$('.calculator__value-wrapper').on('click', function() {
		$(this).parent().children().removeClass('checked');
		$(this).addClass('checked');
	});

	$('.calculator__property').on('click', function() {
		$(this).toggleClass('open');
	});

	// Слайдер партнеров
	function cooperationSlick() {
		$('.cooperation__block').slick({
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
			responsive: [
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			      }
			    }
			]
		});
	};
	if (window.innerWidth < 1201) {
		cooperationSlick();
	};

	// Слайдер статей блога
	function infoBlogSlick() {
		$('.info-blog__block').slick({
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    }
			]
		});
	};

	if (window.innerWidth < 768) {
		infoBlogSlick();
	};
});