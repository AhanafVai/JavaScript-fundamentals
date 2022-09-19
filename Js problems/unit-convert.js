// inches to feet
var dada = 132;
var dadi = 144;
var mama = 209;

function inchesToFeet(inche) {
  var feet = inche / 12;
  return feet;
}

var getFeet = inchesToFeet(dada);
console.log("Feet", getFeet);

// mile to kilometer
function mileToKilometer(mile) {
  var kilometer = mile * 1.68;
  return kilometer;
}
var getKilometer = mileToKilometer(mama);
console.log("kilometer", getKilometer);
