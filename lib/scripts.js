(function($){
$("nav li a").eq($("#mypos").text()).css("color","#f09");

var onFoto=function()
{
	var splash=$(".splash");
	var bigfoto=$(".bigfoto");
 	splash.css(	{"left":0,
				"top":0,
				"width":$(window).outerWidth(),
				"height":$(window).outerHeight()});
	splash.fadeToggle();
	var bg=$(this).css("background-image");
	var tmp=bg.replace(/226/,"800")
				.replace(/128/,"800");
	var left=$(window).outerWidth()/2-bigfoto.width()/2;
	var top=$(window).outerHeight()/2-bigfoto.height()/2; 
	bigfoto.css({"left":left,
				"top":top,
				"background-image":tmp});
	bigfoto.fadeToggle();	
};
var onSplash=function()
{
	$(".splash").fadeToggle(200);
	$(".bigfoto").fadeToggle(200);
};

$(".foto").on("click",onFoto);
$(".newsfoto").on("click",onFoto);
$(".minifoto").on("click",onFoto);
$(".splash").on("click",onSplash);
$(".bigfoto").on("click",onSplash);

})(jQuery);
