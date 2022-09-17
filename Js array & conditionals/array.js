//  array
var arrayNum = [11, 12, 13];
var arrayString = ["am", "you", "it"];

console.log(arrayString);
console.log(arrayString.length);

// index
var bookPages = ["hablu", "bolod", "gadha", "battery", "bal"];
console.log(bookPages.indexOf("hablu"));

// get
var getIndex = bookPages[0];
console.log(getIndex);

// set
bookPages[1] = "setIndex";
console.log(bookPages[1]);

// Add and remove push and pop
var lastBench = ["kalam", "balam", "salam"];

lastBench.push("jalam"); // added in the last
lastBench.pop(); // remove from last
lastBench.unshift("lalam"); // add from the fast
lastBench.shift("lalam"); // remove from the fast
console.log(lastBench);
