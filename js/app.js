$(document).ready(function(){
	/**
	 * side栏的响应式滚动
	 */
	var navbarHeight = $('#navbar').height();
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var paddingTop = navbarHeight;
		if (scrollTop < navbarHeight) {
			paddingTop = navbarHeight - scrollTop;
		} else {
			paddingTop = 0;
		};
		$('#side').css({'padding-top':paddingTop});
	});

	
	/**
	 * side栏的展开/缩起
	 */
	$('#side-collapse-toggle').click(function(){
		$this = $(this);
		$('#side').toggleClass('collapsed');
		$('#main').toggleClass('collapsed');

		$this.children('span').toggleClass('glyphicon-forward');
		$this.children('span').toggleClass('glyphicon-backward');
		$this.toggleClass('collapsed');
	});



});