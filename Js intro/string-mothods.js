// concatenation
var firstName = "kim";
var lastName = "kardesian";

var fullName = firstName + " " + lastName;
console.log(fullName);

// conversion
var onion = "43.55";
var egg = "42";

console.log(parseInt(onion));
console.log(parseFloat(onion));
console.log(typeof onion);

// special fixing floating point
var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
total = parseFloat(total.toFixed(1));

console.log(total);
