//Stacks

// functions: push, pop, 
// peek - display top element
// length 

//palindrome - spelled the same forwards and backwards
 

/*
//arrays have all the functions of a stack

var rnd = ["x","x","x","x","x","x","x"];

var letters = [];

var word = "racecar";

var rword = "";

for (var i=0; i < word.length; i++) {
  letters.push(word[i]);
}  

console.log(letters);

for (var i=0; i < word.length; i++) {
  rword += rnd.pop();
}
console.log(rword);

if (rword = word) {
  console.log(word + " is a palindrome")
} else {
  console.log(word + " is NOT a palindrome")
}


/*   */

var Stack = function() {
  this.count = 0;
  this.storage = {};
}

 