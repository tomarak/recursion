// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	if(typeof obj === "function" || typeof obj === "undefined"){
		return "";
	}
	if(obj === null || typeof obj === "number" || typeof obj === "boolean" ){
		return obj+"";
	}
	else if(typeof obj === "string"){
		return '"'+obj+'"';
	}

	if(obj instanceof Array){
		var arr = [];
		_.each(obj, function(item){
			arr.push(stringifyJSON(item));
		});
		arr.join("");
		return "[" + arr + "]";
	}
	if(obj === Object(obj)){
		var stringItem, arr = [];
		var keys = Object.keys(obj);

		_.each(keys, function(key){
			stringItem = stringifyJSON(obj[key]);
			if(stringItem !== ""){
				arr.push('"'+key+'"'+':'+stringItem);
			}
		});
		arr.join(",");
		return "{"+arr+"}";
	}
};
