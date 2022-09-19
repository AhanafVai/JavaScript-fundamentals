// var factorial = 1;

// for (let i = 1; i <= 7; i++) {
//   console.log(i);
//   factorial = factorial * i;
// }

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// factorial(5);

function factorial(num) {
  let factorial = 1;
  let i = 1;
  while (i <= num) {
    factorial *= i;
    i++;
  }
  return factorial;
}

factorial(5);
