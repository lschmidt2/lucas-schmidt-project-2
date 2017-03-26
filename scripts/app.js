$(document).ready(function(){     
	$("#reveal").delay("1000");
	$("#reveal").fadeOut("slow");
	$(".link").hover(function() {
		$(this).toggleClass("active");
	});
	
});
