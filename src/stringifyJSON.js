// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

	if(obj === null || typeof obj === Number || typeof obj=== Boolean || typeof obj=== String){
		return obj.toString();
	}

	_.each(obj, function(item){
		stringifyJSON(item);
	})


	


};
