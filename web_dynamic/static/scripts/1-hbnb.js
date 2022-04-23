$(function () {
    const amenities-selected = {};
    
    $('div.amenities li input').change(
	function () {
	    if ($(this).is(':checked')) {
		amenities-selected[$(this).attr('data-id')] = $(this).attr('data-name');
	    } else {
		delete amenities-selected[$(this).attr('data-id')];
	    }
	    $('div.amenities h4').html(Object.values(amenities-selected).join(', ') || '&nbsp;');
	});
