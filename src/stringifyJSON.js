// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

	if(obj === null || typeof obj === "number" || typeof obj === "boolean" ){
		return obj+"";
	}
	else if(typeof obj === "string"){
		return '"'+obj+'"';
	}


	if(obj instanceof Array){
		var arr = "[";
		index = -1;

		if(index === obj.length){
			arr+= "]";
			return arr;
		}
		return arr+=stringifyJSON(obj[index+1]);
	}


	


};
