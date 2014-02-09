//
// jQuery Scrollable Anchor Plugin
//
//   http://webrocketsmagazine.com/
//

$(document).ready(function() {
	$("a.scrollable").scrollableLink()
});

jQuery.fn.scrollableLink = function() {
	return this.each(function(){
		var $anchr = $(this);
		$anchr.click(function(e) {	
			e.preventDefault()
			var target = $anchr.attr('href');
			var speed = $anchr.data('speed') || 800;
			var easing = $anchr.data('easing');

			var top = $(target).length > 0 ? $(target).offset().top : 0;
			$("html:not(:animated),body:not(:animated)")
				.stop()
				.animate({ scrollTop: top }, speed, easing, function() {
					window.location.hash = target;
				});
		  	return false;
		})
	})
}