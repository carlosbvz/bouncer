var bouncer = (function(){
	'use strict';

	var queue = [];
						//(required ,    required,       optional)
	var trigger = function(timeToBounce, bouncedFunction, params) {
		if(!params) params = '';
		var triggered = false;

		for(var i in queue) { // check if function is in the queue
			queue[i] === bouncedFunction? triggered = true: '';
		}

		if(!triggered) {
			bouncedFunction(params);
			queue.push(bouncedFunction);
			setTimeout(function(){
				clear(bouncedFunction);
			},timeToBounce);
		}
	};

	var clear = function(bouncedFunction) {
		queue.pop(bouncedFunction);
		console.log(bouncedFunction);
		console.log('==== released ===');
	}

	return {
		trigger: trigger,
		clear: clear

	};
}())