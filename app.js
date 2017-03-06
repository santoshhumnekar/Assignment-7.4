var outer = function(inner) { // inner function
 	inner();
 }
 
 var inner = function() {
 	console.log("Hello World From Inner Function"); // displaying “Hello World From Inner Function” in console.
 }
 
 outer(inner);         // inner function as argument to outer function
