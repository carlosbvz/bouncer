

// Caching
var el 	= $('.objective');
var el2 = $('.objective2');
// binding the events

// Buggy Implementation
el.mouseover(function(){
	reduceHeight($(this));
});
el.mouseout(function(){
	restoreHeight($(this));
});
// Not buggy implementation -- using the bouncer
var bouncingTime = 400;
el2.hover(function(){
	bouncer.trigger(bouncingTime,reduceHeight,$(this));
	// reduceHeight($(this));
});
el2.mouseout(function(){
	bouncer.trigger(bouncingTime,restoreHeight,$(this));
	// reduceHeight($(this));
});


var reduceHeight = function(element) {
	element.animate({
		height: "100px"
	},200);
}
var restoreHeight = function(element) {
	element.animate({
		height: "200px"
	},200);
}