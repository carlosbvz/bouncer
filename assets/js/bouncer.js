var bouncer = (function(){

	var queue = [];

	var init = function(timeToBounce, bouncedFunction,params) {
		var triggered = false;

		for(var i in queue) { // check if function is in the queue
			if(queue[i] === bouncedFunction) triggered = true;
		}

		if(!triggered) {
			bouncedFunction(params);
			queue.push(bouncedFunction);
			setTimeout(function(){
				queue.pop(bouncedFunction);
			},timeToBounce);
		}
	};

	return {
		init:init
	};
}())