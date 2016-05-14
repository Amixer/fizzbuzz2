"use strict"
var start = 1
var end = prompt("Choose a number between 1-100");

var fizzBuzz = function (start, end){

	for (start; start<=end; start++) {

if (start% 15===0 ) 
		{document.write(" FizzBuzz ");
		}
    else if (start % 3 ===0) 
		{ document.write(" Fizz ");
	}
	else if(start % 5===0) 
		{document.write(" Buzz ");
	} 

else {document.write(start + " ");

}
}}
fizzBuzz(start, end);