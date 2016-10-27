

// Cache 
var btn = $('.btn__trigger');
// bind
btn.click(function(){
	var box = $(this).siblings('.box');
	bouncer.init(1000,logicToPerform,box);
});
// Implement
var logicToPerform = function(params) {
	params.css('background-color','blue');
	console.log(params);
}