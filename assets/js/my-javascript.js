$(document).ready(function(){

	window.setTimeout(function() {
		$('section.accordian').css('opacity', '1');
	}, 2000);

	$('div').addClass('default');

		$('div').on('click', function() {

	  	var e = $('section.accordian > div');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})

});
