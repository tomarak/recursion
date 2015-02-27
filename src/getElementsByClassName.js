// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here

  var elements = document;
  console.log(elements);
  var results = [];
 
 function scan(node){
 	for(var i = 0; i < node.childNodes.length; i++){
 		if(node.childNodes[i].classList && node.childNodes[i].classList.contains(className)){
 			results.push(node.childNodes[i]);
 		}
 			scan(node.childNodes[i]);
 	}
 }
 scan(elements);
 console.log(results);
 return results;

  
};


//document.body, element.childNodes, and element.classList