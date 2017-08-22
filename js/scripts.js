$(document).ready(function(){

	///////////// Форма поиска /////////////////
	$('.navList__item-search').on('click', function(){
		$('.navList').fadeOut();
		$('.search-form').fadeIn();
		return false;
	});

	$('.reset').on('click', function(e){
			$('.search-form').fadeOut();
			$('.navList').fadeIn();
	});

	$(document).on('click', function(e){
		if ($('.search-form').has(e.target).length === 0){
			$('.search-form').fadeOut();
			$('.navList').fadeIn();
		}
	});

	///////////// FANCYBOX ////////////////////
	if (typeof $().fancybox !== "undefined") {
		$().fancybox({
			selector : '[data-fancybox="images"]',
			loop     : true,
			thumbs   : false,
			hash     : false,
			transitionEffect : "slide",
			thumbs : {
				autoStart   : false,
				hideOnClose : true
			}
  		});
	};

	///////////// Слайдер //////////////////
	if (typeof $().slick !== "undefined") {
		$('.gallery__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: ".prev-arr",
			nextArrow: ".next-arr"
		});
	};

	///////////// Кастомные селекты ////////////////////
	$('.select').each(function(){
	  var self = $(this);
	  self.find('.select_hidden').val(self.find('.select_list li:first').attr('data-value'));
	});

	$('.select_in').on('click', function() {
	  var self = $(this),
	    select = self.closest('.select'),
	    option_list = select.find('.select_listWrap');

	  if (option_list.is(':visible')){
	    option_list.slideUp(200);
	    select.removeClass('is-opened');
	    self.find('.select_arrow').removeClass('is-active');
	  } else {
	    if ($('.select .select_listWrap:visible').length){
	      $('.select .select_listWrap:visible').hide();
	      $('.select .select_arrow').removeClass('is-active');
	    }
	    option_list.slideDown(200);
	    select.addClass('is-opened');
	    self.find('.arrow').addClass('is-active');
	  }
	});

	$('.select_list li').on('click', function() {
	  var self =  $(this),
	      title = self.closest('.select').find('.select_in .select_title'),
	      option = self.html();

	  title.html(option);
	  self.closest('.select').find('input[type=hidden]').val(self.attr('data-value'));
	  self.closest('.select_list').find('li').removeClass('is-active');
	  self.addClass('is-active');
	  self.closest('.select_listWrap').slideUp(200);
	  self.closest('.select').removeClass('is-opened');
	  self.closest('.select').find('.select_arrow').removeClass('is-active');
	});

	$(document).on('click', function(e){
	  if ($('.select .select_list:visible').length && !$(e.target).closest('.select').length){
	    $('.select').removeClass('is-opened');
	    $('.select .select_listWrap').slideUp(200);
	    $('.select .select_arrow').removeClass('is-active');
	  }
	});

	$(document).keyup(function(e){
	  if (e.keyCode == 27) {
	    $('.select').removeClass('is-opened');
	    $('.select .select_list').slideUp(200);
	  }
	});

	$('.select_scroll-up').on('click', function(){
		$('.select_list').scrollTo('-=25px', 200);
	});
	
	$('.select_scroll-down').on('click', function(){
		$('.select_list').scrollTo('+=25px', 200);
	});


})