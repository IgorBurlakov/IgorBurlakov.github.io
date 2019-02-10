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


	$('.calculator__button').on('click', function(event) {
		event.preventDefault();
		$(this).parent().children().removeClass('active');
		if ($(this).data('calculator') == 'tab-elevator') {
			$(this).addClass('active');
			$('.calculator__elevator').addClass('active');
			$('.calculator__service').removeClass('active');
		}
		if ($(this).data('calculator') == 'tab-service') {
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

	$('.price__property').on('click', function() {
		$(this).toggleClass('open');
		$(this).next().children().toggleClass('open');
	});
	$('#price-value .price__value-item').on('click', function() {
		var priceSelected = $(this).data('priceValue');
		$('.price__value-item').removeClass('active');
		$('.price__value-item').filter(function() {
			if ($(this).data('priceValue') == priceSelected) {
				$(this).addClass('active');
			}
		});
	});


	//Первый элемент селекта
	if (window.innerWidth < 900) {
		$('.filter__disabled-option').attr('selected', 'true');
	}


	// Слайдер партнеров
	if (window.innerWidth < 1201) {cooperationSlick();};
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

	// Слайдер клиентов
	$('#client-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '#client-slider-2',
		responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		        arrows: true
		      }
		    }
		]        
	});
	$('#client-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '#client-slider'
	});

	//Слайдер отзывов
	$('#reviews').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: true,
        responsive: [
		    {
		      breakpoint: 800,
		      settings: {
				slidesToShow: 1,
        		slidesToScroll: 1,		      }
		    }
		]
	});


	//Слайдер лицензий
	$('#licenses').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: true,
        responsive: [
		    {
		      breakpoint: 800,
		      settings: {
				slidesToShow: 1,
        		slidesToScroll: 1,		      }
		    }
		]
	});

	// Слайдер статей блога
	if (window.innerWidth < 768) {infoBlogSlick();};
	function infoBlogSlick() {
		$('.info-blog__block').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
		});
	};

	// Слайдер товаров
	if (window.innerWidth < 981) {filterGoodsSlick();};
	function filterGoodsSlick() {
		$('.filter__goods-list').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
		});
	};

	// Слайдер портфолио
	if (window.innerWidth < 768) {portfolioSlick();};
	function portfolioSlick() {
		$('.portfolio__block').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true
		});
	};


	$('.filter__tipe-mobile').on('click', function() {
		$(this).parent().toggleClass('open');
	})

	//Скроллинг по странице
	$('.filter__tipe-item').on('click', function(event) {
		event.preventDefault();
		var linkName = $(this).data('button');
		$('html, body').animate(
			{scrollTop: $('#' + linkName).offset().top},
			1000
		);
	});


	//Popup
	$('.filter__goods-button').on('click', function(event) {
		event.preventDefault();
		$('.overlay').addClass('active');
		$('.popup-block').addClass('active');
		document.body.style.overflow = "hidden"
	});

	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.overlay').removeClass('active');
		$('.popup-block').removeClass('active');
		document.body.style.overflow = ""
	});

	if (window.innerWidth < 400 || window.innerHeight < 750) {
		$('.popup-block').addClass('mobile-popup');
	}

});