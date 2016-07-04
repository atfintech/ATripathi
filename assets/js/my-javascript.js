$(function() {

	window.setTimeout(function() {
		$('.accordian').css('opacity', '1');
	}, 2000);

	$('div').addClass('default');

		$('div').on('click', function() {

	  	var e = $('.accordian > div');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})
