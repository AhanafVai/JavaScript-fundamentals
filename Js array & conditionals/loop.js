// while
var roastGive = 0;

while (roastGive <= 7) {
  console.log("Roast , please");
  console.log(roastGive);
  if (roastGive == 5) {
    break;
  }
  roastGive++;
}

// for loop
for (let roastGive = 0; roastGive <= 7; roastGive++) {
  console.log(roastGive);
  console.log("Roast ,please");
  if (roastGive == 5) {
    break;
  }
}
