$(function() {
	var $window = $(window),
		$header = $('ul.navbar-nav'),
		$links = $header.find('a'),
		$anchors = $('a[name]');

	$window.scroll(function() { 
		var i,
			max = -99999,
			anchor = null,
			offset = $header.height(),
			scroll = $window.scrollTop();

		$anchors.each(function() { 
			var $this = $(this),
				position = $this.offset().top - offset - scroll;

			if (position <= 1 && position > max) {
				max = position;
				anchor = $links.filter('[href="#' + $this.attr('name') + '"]');
			}
		});

		$links.removeClass('active');

		if (anchor != null) {
			anchor.addClass('active');
		}
	});

	$window.scroll();

	$links.click(function(e) {
		e.preventDefault();

		var $this = $(this),
			name = $this.attr('href').substring(1),
			offset = $header.height(),
			$anchor = $anchors.filter('[name="' + name + '"]');

		$('html, body').animate({
			scrollTop: ($anchor.offset().top - offset) + 'px'
		});
	});
});