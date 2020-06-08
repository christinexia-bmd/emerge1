// WHITE LAYER FOLLOW MOUSE
$( document ).on( "mousemove", function(e) {
	$('.layer.white').css({'left':e.pageX})
})