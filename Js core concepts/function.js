// functions and call
function startFan() {
  console.log("fan on");
}
startFan();

// parameter
function addNumbers(num1, num2) {
  console.log(num1, num2);
  var total = num1 + num2;
  return total;
}

var result = addNumbers(23, 34);
console.log("result value", result);
