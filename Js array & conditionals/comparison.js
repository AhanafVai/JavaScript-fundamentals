// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 == 6);
// console.log(5 === 6);
// console.log(6 !== 6);

// Handle multiple conditions, and or
var gotJob = true;
var money = 10000;
var hasFlat = true;

// if (gotJob == true && money > 2000) {
//   console.log("lets marry");
// } else {
//   console.log("fuck off");
// }

if (gotJob == true || hasFlat == false) {
  console.log("lets marry");
} else {
  console.log("fuck off");
}

// nested conditionals
var danishPrice = 50;
var butterBreadPrice = 25;
var toastPrice = 10;
var myBudget = 100;
var packedWell = false;

if (danishPrice < myBudget) {
  if (packedWell == true) {
    console.log("give danish");
  }
} else if (butterBreadPrice < myBudget) {
  console.log("give butter bread");
} else if (toastPrice < myBudget) {
  console.log("give toast");
} else {
  console.log("I am poor");
}
