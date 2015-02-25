// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	if(typeof obj === "function" || typeof obj === "undefined"){
		return null;
	}
	if(obj === null || typeof obj === "number" || typeof obj === "boolean" ){
		return obj+"";
	}
	else if(typeof obj === "string"){
		return '"'+obj+'"';
	}

	if(obj instanceof Array){
		return "[" + _.map(obj, function(item){
			return stringifyJSON(item);
		}).join(",") + "]"
	}
	if(Object.keys(obj).length != undefined){
		
	}


	


};
